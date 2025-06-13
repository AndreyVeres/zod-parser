class LoggerService {
  private showLogs = true;
  log(...args: any[]) {
    if (this.showLogs) {
      console.log(...args);
    }
    return this;
  }
  warn(...args: any[]) {
    if (this.showLogs) {
      console.trace('%c Warn', 'color: white; background-color: orange;', ...args);
    }
    return this;
  }
  error(...args: any[]) {
    if (this.showLogs) {
      console.trace('%c Error', 'color: white; background-color: red;', ...args);
    }
    return this;
  }
  dir(args: object) {
    if (this.showLogs) {
      console.dir(args);
    }
    return this;
  }
  table(args: any[]) {
    if (this.showLogs) {
      console.table(args);
    }
    return this;
  }

  group({ label, collapsed }: { label?: string; collapsed?: boolean }) {
    if (this.showLogs) {
      if (collapsed) {
        console.groupCollapsed(label);
      } else {
        console.group(label);
      }
    }
    return this;
  }
  groupEnd() {
    if (this.showLogs) {
      console.groupEnd();
    }
    return this;
  }
}
export const Logger = new LoggerService();
