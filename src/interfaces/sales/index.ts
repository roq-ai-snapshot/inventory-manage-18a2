import { InventoryInterface } from 'interfaces/inventory';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  product_id: string;
  quantity_sold?: number;
  sale_date?: any;
  customer_name?: string;
  sales_representative_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  inventory?: InventoryInterface;
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  customer_name?: string;
  sales_representative_id?: string;
  organization_id?: string;
}
