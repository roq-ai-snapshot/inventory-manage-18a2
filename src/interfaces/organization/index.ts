import { CustomerInterface } from 'interfaces/customer';
import { InventoryInterface } from 'interfaces/inventory';
import { SalesInterface } from 'interfaces/sales';
import { SupplyChainInterface } from 'interfaces/supply-chain';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  location?: string;
  established_date?: any;
  industry?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  customer?: CustomerInterface[];
  inventory?: InventoryInterface[];
  sales?: SalesInterface[];
  supply_chain?: SupplyChainInterface[];
  user?: UserInterface;
  _count?: {
    customer?: number;
    inventory?: number;
    sales?: number;
    supply_chain?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
