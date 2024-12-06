export function delay(cb: () => void, delayMs = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, delayMs);
  });
}

export function delayReturn<T>(data: T, delayMs = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delayMs);
  });
}
