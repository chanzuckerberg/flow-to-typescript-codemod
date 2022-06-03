import * as t from "@babel/types";
import traverse from "@babel/traverse";
import { TransformerInput } from "./transformer";

/**
 * If any of the transforms used a utility type, we need to import them
 * @param state
 * @param file
 */
export function addImports({ state, file }: TransformerInput) {
  traverse(file, {
    Program: {
      exit(path) {
        if (state.usedUtils) {
          const importDeclaration = t.importDeclaration(
            [t.importSpecifier(t.identifier("Flow"), t.identifier("Flow"))],
            t.stringLiteral("flow-to-typescript-codemod")
          );
          path.node.body = [importDeclaration, ...path.node.body];
        }
        if (state.usedFlowCompatTypes.size) {
          const importSpecifiers: Array<t.ImportSpecifier> = [];
          state.usedFlowCompatTypes.forEach((flowCompatTypeName) => {
            importSpecifiers.push(
              t.importSpecifier(
                t.identifier(flowCompatTypeName),
                t.identifier(flowCompatTypeName)
              )
            );
          });

          const importStatement = t.importDeclaration(
            importSpecifiers,
            t.stringLiteral("v2/core/util/flowCompat")
          );

          /**
           * The import declaration has a default value of `null` when using the builder function.
           * Set the `importKind` field so statement is `import type {...}` instead of `import {...}`
           */
          importStatement.importKind = "type";

          path.node.body.unshift(importStatement);
        }
      },
    },
  });
}
