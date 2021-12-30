interface ServiceEnv {
  port: number;
  host: number;
}

export interface ServiceOption {
  options: ServiceEnv;
  transport: number;
}

export interface AppServiceEnvConfig {
  getOrderServiceOption(): ServiceOption;
  getProductServiceOption(): ServiceOption;
  getStripeServiceOption(): ServiceOption;
  getCartServiceOption(): ServiceOption;

  getOrderPort(): number;
  getCartPort(): number;
  getStripePort(): number;
  getProductPort(): number;
  getApiPort(): number;
}
