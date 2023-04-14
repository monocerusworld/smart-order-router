/* eslint-disable */
class NullLogger {
    constructor() {
        this.ERROR_MESSAGE = 'NullLogger does not support. Instantiate a valid logger using "setGlobalLogger"';
        this.src = true;
    }
    addStream(_stream) {
        throw new Error(this.ERROR_MESSAGE);
    }
    addSerializers(_serializers) {
        throw new Error(this.ERROR_MESSAGE);
    }
    child(_options, _simple) {
        return this;
    }
    reopenFileStreams() {
        throw new Error(this.ERROR_MESSAGE);
    }
    level(_value) {
        return;
    }
    levels(_name, _value) {
        return;
    }
    trace(..._rest) {
        return true;
    }
    debug(..._rest) {
        return true;
    }
    info(..._rest) {
        return true;
    }
    warn(..._rest) {
        return true;
    }
    error(..._rest) {
        return true;
    }
    fatal(..._rest) {
        return true;
    }
    addListener(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    on(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    once(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    removeListener(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    off(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    removeAllListeners(_event) {
        throw new Error(this.ERROR_MESSAGE);
    }
    setMaxListeners(_n) {
        throw new Error(this.ERROR_MESSAGE);
    }
    getMaxListeners() {
        throw new Error(this.ERROR_MESSAGE);
    }
    listeners(_event) {
        throw new Error(this.ERROR_MESSAGE);
    }
    rawListeners(_event) {
        throw new Error(this.ERROR_MESSAGE);
    }
    emit(_event, ..._args) {
        throw new Error(this.ERROR_MESSAGE);
    }
    listenerCount(_event) {
        throw new Error(this.ERROR_MESSAGE);
    }
    prependListener(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    prependOnceListener(_event, _listener) {
        throw new Error(this.ERROR_MESSAGE);
    }
    eventNames() {
        throw new Error(this.ERROR_MESSAGE);
    }
}
export let log = new NullLogger();
export const setGlobalLogger = (_log) => {
    log = _log;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUlwQixNQUFNLFVBQVU7SUFBaEI7UUFDVSxrQkFBYSxHQUNuQixpRkFBaUYsQ0FBQztRQXlCcEYsUUFBRyxHQUFHLElBQUksQ0FBQztJQW9HYixDQUFDO0lBNUhDLFNBQVMsQ0FBQyxPQUFzQjtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsY0FBYyxDQUFDLFlBQWdDO1FBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxLQUFLLENBQUMsUUFBZ0IsRUFBRSxPQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxpQkFBaUI7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBR0QsS0FBSyxDQUFDLE1BQVk7UUFDaEIsT0FBTztJQUNULENBQUM7SUFJRCxNQUFNLENBQUMsS0FBVyxFQUFFLE1BQVk7UUFDOUIsT0FBTztJQUNULENBQUM7SUFPRCxLQUFLLENBQUMsR0FBRyxLQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxHQUFHLEtBQVU7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBS0QsSUFBSSxDQUFDLEdBQUcsS0FBVTtRQUNoQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFLRCxJQUFJLENBQUMsR0FBRyxLQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxHQUFHLEtBQVU7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLEdBQUcsS0FBVTtRQUNqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxXQUFXLENBQ1QsTUFBdUIsRUFDdkIsU0FBbUM7UUFFbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELEVBQUUsQ0FBQyxNQUF1QixFQUFFLFNBQW1DO1FBQzdELE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBdUIsRUFBRSxTQUFtQztRQUMvRCxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsY0FBYyxDQUNaLE1BQXVCLEVBQ3ZCLFNBQW1DO1FBRW5DLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxHQUFHLENBQUMsTUFBdUIsRUFBRSxTQUFtQztRQUM5RCxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsTUFBd0I7UUFDekMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGVBQWUsQ0FBQyxFQUFVO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxlQUFlO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELFNBQVMsQ0FBQyxNQUF1QjtRQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsWUFBWSxDQUFDLE1BQXVCO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBdUIsRUFBRSxHQUFHLEtBQVk7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUF1QjtRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsZUFBZSxDQUNiLE1BQXVCLEVBQ3ZCLFNBQW1DO1FBRW5DLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxtQkFBbUIsQ0FDakIsTUFBdUIsRUFDdkIsU0FBbUM7UUFFbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELFVBQVU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQVcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUUxQyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2IsQ0FBQyxDQUFDIn0=