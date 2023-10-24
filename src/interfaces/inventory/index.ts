import { SalesInterface } from 'interfaces/sales';
import { SupplyChainInterface } from 'interfaces/supply-chain';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_name: string;
  product_description?: string;
  quantity?: number;
  price?: number;
  supplier?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  sales?: SalesInterface[];
  supply_chain?: SupplyChainInterface[];
  organization?: OrganizationInterface;
  _count?: {
    sales?: number;
    supply_chain?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_name?: string;
  product_description?: string;
  supplier?: string;
  organization_id?: string;
}
