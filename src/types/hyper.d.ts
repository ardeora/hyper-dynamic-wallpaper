export type RPCEventListener = () => void;

declare global {
  interface Window {
    rpc: {
      on: (event: string, callback: RPCEventListener) => void;
      emit: (event: string) => void;
    };
  }
}
