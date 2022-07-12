import amqp from 'amqplib';

export class BrokerWrapper {
  private _client?: amqp.Connection;
  private _exchange?: amqp.Replies.AssertExchange;
  private _channel?: amqp.Channel;
  get client() {
    if (!this._client)
      throw new Error('Cannot access message broker client before connecting!');
    return this._client;
  }
  get exchange() {
    if (!this._exchange)
      throw new Error('Cannot access message broker client before connecting!');
    return this._exchange.exchange;
  }
  get channel() {
    if (!this._channel)
      throw new Error('Cannot access message broker client before connecting!');
    return this._channel;
  }
  async connect(uri: string, exchangeName: string, exchangeType: string) {
    try {
      this._client = await amqp.connect(uri);
      this._channel = await this._client.createChannel();
      this._exchange = await this._channel.assertExchange(
        exchangeName,
        exchangeType,
        {
          durable: false,
        }
      );
      console.log('Connected to RabbitMQ');
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
  async createQueue(queueName: string) {
    if (!this._channel)
      throw new Error('Cannot access message broker channel before creating!');
    try {
      await this._channel.assertQueue(queueName, {exclusive: true});
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export const brokerWrapper = new BrokerWrapper();
