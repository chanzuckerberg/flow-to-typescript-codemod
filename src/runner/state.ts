import type { FlowCompatTypeName } from "../convert/utils/type-mappings";

export type State = {
  // Set this flag if the codemod encounters JSX code
  hasJsx: boolean;

  // Set this flag if utility types were encountered, and an import should be added
  usedUtils: boolean;

  /**
   * Keeps track of `v2/core/util/flowCompat` types that have been
   * added to a file and need to be imported
   */
  readonly usedFlowCompatTypes: Set<FlowCompatTypeName>;

  // Config is used to store immutable configuration
  readonly config: {
    // The path of the current file that is being converted
    readonly filePath: string;

    // If the current file is a test file, which allows looser type conversions
    readonly isTestFile: boolean;

    // The watermark tag to use
    readonly watermark: string;

    // The message to include with the watermark
    readonly watermarkMessage: string;

    // Should we convert JSX Spreads or not?
    readonly convertJSXSpreads: boolean;

    // Should we modify the extension of imports?
    readonly dropImportExtensions: boolean;

    // Should we keep $ private types
    readonly keepPrivateTypes: boolean;

    // Are we going to force TSX extensions
    readonly forceTSX: boolean;

    // Should we check flow types or just use any?
    readonly disableFlow: boolean;
  };
};
