export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.port = process.env.API_PORT;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
