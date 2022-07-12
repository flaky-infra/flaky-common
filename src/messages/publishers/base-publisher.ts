import {BrokerWrapper} from '../broker-wrapper';
import {Event} from '../events/event-interface';

export abstract class Publisher<T extends Event> {
  abstract eventType: T['eventType'];
  abstract routingKey: string;
  protected broker: BrokerWrapper;
  constructor(broker: BrokerWrapper) {
    this.broker = broker;
  }
  publish(data: T['data']): boolean {
    return this.broker.channel.publish(
      this.broker.exchange,
      this.routingKey,
      Buffer.from(JSON.stringify(data))
    );
  }
}
