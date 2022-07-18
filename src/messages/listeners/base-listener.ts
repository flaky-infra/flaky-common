import {ConsumeMessage} from 'amqplib';
import {BrokerWrapper} from '../broker-wrapper';
import {Event} from '../events/event-interface';
abstract class Listener<T extends Event> {
  abstract eventType: T['eventType'];
  abstract queueName: string;
  abstract routingKey: string;
  abstract onMessage(data: T['data'], msg: ConsumeMessage): void;
  protected broker: BrokerWrapper;

  constructor(broker: BrokerWrapper) {
    this.broker = broker;
  }

  async listen() {
    await this.broker.createQueue(this.queueName);
    await this.broker.channel.bindQueue(
      this.queueName,
      this.broker.exchange,
      this.routingKey
    );
    this.broker.channel.consume(
      this.queueName,
      (msg: ConsumeMessage | null) => {
        if (!msg) throw new Error('No message!');
        const parsedData = this.parseMessage(msg);
        this.onMessage(parsedData, msg);
      },
      {
        noAck: true,
      }
    );
  }

  parseMessage(msg: ConsumeMessage) {
    const data = msg.content.toString();
    return JSON.parse(data);
  }
}

export {Listener};
