import { InventoryInterface } from 'interfaces/inventory';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SupplyChainInterface {
  id?: string;
  product_id: string;
  supplier?: string;
  quantity_supplied?: number;
  supply_date?: any;
  supply_chain_manager_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  inventory?: InventoryInterface;
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface SupplyChainGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  supplier?: string;
  supply_chain_manager_id?: string;
  organization_id?: string;
}
