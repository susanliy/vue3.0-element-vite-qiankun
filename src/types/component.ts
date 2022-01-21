/** 弹窗确定按钮回调 */
export type DialogOkHandle = (done: (payload?: unknown) => void) => void

/** 弹窗取消按钮回调 */
export type DialogCancelHandle = (done: () => void) => void
