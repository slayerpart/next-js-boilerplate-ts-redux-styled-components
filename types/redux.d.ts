interface ActionWithPayloadType<TType extends string, TPayload extends object> {
  readonly type: TType;
  readonly payload: TPayload;
}
