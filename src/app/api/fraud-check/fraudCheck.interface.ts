export type Report = {
  reportFrom: string;
  comment: string;
  date: string;
};

export type Errors = {
  errorFrom?: string;
  message: string;
};

export type Courier = {
  name: string;
  logo: string;
  orders: number;
  deliveries: number;
  cancellations: number;
  deliveryRate: number;
};

export type FormatFraudCheckData = {
  totalOrders: number;
  totalDeliveries: number;
  totalCancellations: number;
  couriers: Courier[];
  reports?: Report[];
  error?: boolean;
  errorFrom?: string;
  message?: string;
};

export type FraudCheckData = {
  phoneNumber: string;
  totalOrders: number;
  totalDeliveries: number;
  totalCancellations: number;
  successRatio: number;
  message: string;
  couriers: Courier[];
  reports: Report[];
  errors: Errors[];
};
