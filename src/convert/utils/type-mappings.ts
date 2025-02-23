import * as t from "@babel/types";

export const ReactTypes = {
  Node: "ReactNode",
  Child: "ReactChild",
  Children: "ReactChildren",
  Text: "ReactText",
  Fragment: "ReactFragment",
  FragmentType: "ComponentType",
  Portal: "ReactPortal",
  NodeArray: "ReactNodeArray",
  ElementProps: "ComponentProps",
  StatelessFunctionalComponent: `FC`,
} as const;

export const SyntheticEvents = {
  SyntheticEvent: "React.SyntheticEvent",
  SyntheticAnimationEvent: "React.AnimationEvent",
  SyntheticCompositionEvent: "React.CompositionEvent",
  SyntheticClipboardEvent: "React.ClipboardEvent",
  SyntheticUIEvent: "React.UIEvent",
  SyntheticFocusEvent: "React.FocusEvent",
  SyntheticKeyboardEvent: "React.KeyboardEvent",
  SyntheticMouseEvent: "React.MouseEvent",
  SyntheticDragEvent: "React.DragEvent",
  SyntheticWheelEvent: "React.WheelEvent",
  SyntheticPointerEvent: "React.PointerEvent",
  SyntheticTouchEvent: "React.TouchEvent",
  SyntheticTransitionEvent: "React.TransitionEvent",
} as const;

export const MomentTypes = {
  MomentDuration: "Duration",
} as const;

export const FlowCompatTypes = {
  any: t.tsTypeReference(t.identifier("$TSFixMeAny")),
  function: t.tsTypeReference(t.identifier("$TSFixMeFunction")),
  object: t.tsTypeReference(t.identifier("$TSFixMeObject")),
};

export type FlowCompatTypeName =
  | "$TSFixMeAny"
  | "$TSFixMeObject"
  | "$TSFixMeFunction";
