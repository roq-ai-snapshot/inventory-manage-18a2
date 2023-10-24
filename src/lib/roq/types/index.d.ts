/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model inventory
 *
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model sales
 *
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>;
/**
 * Model supply_chain
 *
 */
export type supply_chain = $Result.DefaultSelection<Prisma.$supply_chainPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sales
   * const sales = await prisma.sales.findMany()
   * ```
   */
  get sales(): Prisma.salesDelegate<ExtArgs>;

  /**
   * `prisma.supply_chain`: Exposes CRUD operations for the **supply_chain** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Supply_chains
   * const supply_chains = await prisma.supply_chain.findMany()
   * ```
   */
  get supply_chain(): Prisma.supply_chainDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.0
   * Query Engine version: 475c616176945d72f4330c92801f0c5e6398dc0f
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    customer: 'customer';
    inventory: 'inventory';
    organization: 'organization';
    sales: 'sales';
    supply_chain: 'supply_chain';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'customer' | 'inventory' | 'organization' | 'sales' | 'supply_chain' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>;
        fields: Prisma.inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>;
        fields: Prisma.salesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[];
          };
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSales>;
          };
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SalesGroupByOutputType>[];
          };
          count: {
            args: Prisma.salesCountArgs<ExtArgs>;
            result: $Utils.Optional<SalesCountAggregateOutputType> | number;
          };
        };
      };
      supply_chain: {
        payload: Prisma.$supply_chainPayload<ExtArgs>;
        fields: Prisma.supply_chainFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.supply_chainFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.supply_chainFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>;
          };
          findFirst: {
            args: Prisma.supply_chainFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.supply_chainFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>;
          };
          findMany: {
            args: Prisma.supply_chainFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>[];
          };
          create: {
            args: Prisma.supply_chainCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>;
          };
          createMany: {
            args: Prisma.supply_chainCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.supply_chainDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>;
          };
          update: {
            args: Prisma.supply_chainUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>;
          };
          deleteMany: {
            args: Prisma.supply_chainDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.supply_chainUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.supply_chainUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chainPayload>;
          };
          aggregate: {
            args: Prisma.Supply_chainAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSupply_chain>;
          };
          groupBy: {
            args: Prisma.supply_chainGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Supply_chainGroupByOutputType>[];
          };
          count: {
            args: Prisma.supply_chainCountArgs<ExtArgs>;
            result: $Utils.Optional<Supply_chainCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    sales: number;
    supply_chain: number;
  };

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | InventoryCountOutputTypeCountSalesArgs;
    supply_chain?: boolean | InventoryCountOutputTypeCountSupply_chainArgs;
  };

  // Custom InputTypes

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the InventoryCountOutputType
       */
      select?: InventoryCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountSalesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: salesWhereInput;
  };

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountSupply_chainArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: supply_chainWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    customer: number;
    inventory: number;
    sales: number;
    supply_chain: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | OrganizationCountOutputTypeCountCustomerArgs;
    inventory?: boolean | OrganizationCountOutputTypeCountInventoryArgs;
    sales?: boolean | OrganizationCountOutputTypeCountSalesArgs;
    supply_chain?: boolean | OrganizationCountOutputTypeCountSupply_chainArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountCustomerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: customerWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSalesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: salesWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSupply_chainArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: supply_chainWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customer: number;
    organization: number;
    sales: number;
    supply_chain: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    sales?: boolean | UserCountOutputTypeCountSalesArgs;
    supply_chain?: boolean | UserCountOutputTypeCountSupply_chainArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupply_chainArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: supply_chainWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    email: string | null;
    organization_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    email: string | null;
    organization_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    phone_number: number;
    email: number;
    organization_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    email?: true;
    organization_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    email?: true;
    organization_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    email?: true;
    organization_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    name: string;
    address: string | null;
    phone_number: string | null;
    email: string | null;
    organization_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        address?: boolean;
        phone_number?: boolean;
        email?: boolean;
        organization_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone_number?: boolean;
    email?: boolean;
    organization_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string | null;
        phone_number: string | null;
        email: string | null;
        organization_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly name: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly phone_number: FieldRef<'customer', 'String'>;
    readonly email: FieldRef<'customer', 'String'>;
    readonly organization_id: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
  };

  export type InventorySumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    id: string | null;
    product_name: string | null;
    product_description: string | null;
    quantity: number | null;
    price: number | null;
    supplier: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    id: string | null;
    product_name: string | null;
    product_description: string | null;
    quantity: number | null;
    price: number | null;
    supplier: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    id: number;
    product_name: number;
    product_description: number;
    quantity: number;
    price: number;
    supplier: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    quantity?: true;
    price?: true;
  };

  export type InventorySumAggregateInputType = {
    quantity?: true;
    price?: true;
  };

  export type InventoryMinAggregateInputType = {
    id?: true;
    product_name?: true;
    product_description?: true;
    quantity?: true;
    price?: true;
    supplier?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryMaxAggregateInputType = {
    id?: true;
    product_name?: true;
    product_description?: true;
    quantity?: true;
    price?: true;
    supplier?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryCountAggregateInputType = {
    id?: true;
    product_name?: true;
    product_description?: true;
    quantity?: true;
    price?: true;
    supplier?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    id: string;
    product_name: string;
    product_description: string | null;
    quantity: number | null;
    price: number | null;
    supplier: string | null;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        product_name?: boolean;
        product_description?: boolean;
        quantity?: boolean;
        price?: boolean;
        supplier?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        sales?: boolean | inventory$salesArgs<ExtArgs>;
        supply_chain?: boolean | inventory$supply_chainArgs<ExtArgs>;
        _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inventory']
    >;

  export type inventorySelectScalar = {
    id?: boolean;
    product_name?: boolean;
    product_description?: boolean;
    quantity?: boolean;
    price?: boolean;
    supplier?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    sales?: boolean | inventory$salesArgs<ExtArgs>;
    supply_chain?: boolean | inventory$supply_chainArgs<ExtArgs>;
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'inventory';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      sales: Prisma.$salesPayload<ExtArgs>[];
      supply_chain: Prisma.$supply_chainPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        product_name: string;
        product_description: string | null;
        quantity: number | null;
        price: number | null;
        supplier: string | null;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$inventoryPayload,
    S
  >;

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    inventoryFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory']; meta: { name: 'inventory' } };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     **/
    create<T extends inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Inventories.
     *     @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     **/
    delete<T extends inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     **/
    upsert<T extends inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory model
     */
    readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    sales<T extends inventory$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, inventory$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    supply_chain<T extends inventory$supply_chainArgs<ExtArgs> = {}>(
      args?: Subset<T, inventory$supply_chainArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<'inventory', 'String'>;
    readonly product_name: FieldRef<'inventory', 'String'>;
    readonly product_description: FieldRef<'inventory', 'String'>;
    readonly quantity: FieldRef<'inventory', 'Int'>;
    readonly price: FieldRef<'inventory', 'Int'>;
    readonly supplier: FieldRef<'inventory', 'String'>;
    readonly organization_id: FieldRef<'inventory', 'String'>;
    readonly created_at: FieldRef<'inventory', 'DateTime'>;
    readonly updated_at: FieldRef<'inventory', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
  };

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput;
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
  };

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory.sales
   */
  export type inventory$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * inventory.supply_chain
   */
  export type inventory$supply_chainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    where?: supply_chainWhereInput;
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    cursor?: supply_chainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Supply_chainScalarFieldEnum | Supply_chainScalarFieldEnum[];
  };

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    established_date: number;
    industry: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        location?: boolean;
        established_date?: boolean;
        industry?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        customer?: boolean | organization$customerArgs<ExtArgs>;
        inventory?: boolean | organization$inventoryArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        sales?: boolean | organization$salesArgs<ExtArgs>;
        supply_chain?: boolean | organization$supply_chainArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    established_date?: boolean;
    industry?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | organization$customerArgs<ExtArgs>;
    inventory?: boolean | organization$inventoryArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    sales?: boolean | organization$salesArgs<ExtArgs>;
    supply_chain?: boolean | organization$supply_chainArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>[];
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      sales: Prisma.$salesPayload<ExtArgs>[];
      supply_chain: Prisma.$supply_chainPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        established_date: Date | null;
        industry: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends organization$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    inventory<T extends organization$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    sales<T extends organization$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    supply_chain<T extends organization$supply_chainArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$supply_chainArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly location: FieldRef<'organization', 'String'>;
    readonly established_date: FieldRef<'organization', 'DateTime'>;
    readonly industry: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.customer
   */
  export type organization$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * organization.inventory
   */
  export type organization$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * organization.sales
   */
  export type organization$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * organization.supply_chain
   */
  export type organization$supply_chainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    where?: supply_chainWhereInput;
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    cursor?: supply_chainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Supply_chainScalarFieldEnum | Supply_chainScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null;
    _avg: SalesAvgAggregateOutputType | null;
    _sum: SalesSumAggregateOutputType | null;
    _min: SalesMinAggregateOutputType | null;
    _max: SalesMaxAggregateOutputType | null;
  };

  export type SalesAvgAggregateOutputType = {
    quantity_sold: number | null;
  };

  export type SalesSumAggregateOutputType = {
    quantity_sold: number | null;
  };

  export type SalesMinAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    quantity_sold: number | null;
    sale_date: Date | null;
    customer_name: string | null;
    sales_representative_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalesMaxAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    quantity_sold: number | null;
    sale_date: Date | null;
    customer_name: string | null;
    sales_representative_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalesCountAggregateOutputType = {
    id: number;
    product_id: number;
    quantity_sold: number;
    sale_date: number;
    customer_name: number;
    sales_representative_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SalesAvgAggregateInputType = {
    quantity_sold?: true;
  };

  export type SalesSumAggregateInputType = {
    quantity_sold?: true;
  };

  export type SalesMinAggregateInputType = {
    id?: true;
    product_id?: true;
    quantity_sold?: true;
    sale_date?: true;
    customer_name?: true;
    sales_representative_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalesMaxAggregateInputType = {
    id?: true;
    product_id?: true;
    quantity_sold?: true;
    sale_date?: true;
    customer_name?: true;
    sales_representative_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalesCountAggregateInputType = {
    id?: true;
    product_id?: true;
    quantity_sold?: true;
    sale_date?: true;
    customer_name?: true;
    sales_representative_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sales
     **/
    _count?: true | SalesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SalesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SalesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SalesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SalesMaxAggregateInputType;
  };

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
    [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>;
  };

  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput;
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[];
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum;
    having?: salesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesCountAggregateInputType | true;
    _avg?: SalesAvgAggregateInputType;
    _sum?: SalesSumAggregateInputType;
    _min?: SalesMinAggregateInputType;
    _max?: SalesMaxAggregateInputType;
  };

  export type SalesGroupByOutputType = {
    id: string;
    product_id: string;
    quantity_sold: number | null;
    sale_date: Date | null;
    customer_name: string | null;
    sales_representative_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: SalesCountAggregateOutputType | null;
    _avg: SalesAvgAggregateOutputType | null;
    _sum: SalesSumAggregateOutputType | null;
    _min: SalesMinAggregateOutputType | null;
    _max: SalesMaxAggregateOutputType | null;
  };

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SalesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
          : GetScalarType<T[P], SalesGroupByOutputType[P]>;
      }
    >
  >;

  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      product_id?: boolean;
      quantity_sold?: boolean;
      sale_date?: boolean;
      customer_name?: boolean;
      sales_representative_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      inventory?: boolean | inventoryDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['sales']
  >;

  export type salesSelectScalar = {
    id?: boolean;
    product_id?: boolean;
    quantity_sold?: boolean;
    sale_date?: boolean;
    customer_name?: boolean;
    sales_representative_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sales';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      inventory: Prisma.$inventoryPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        product_id: string;
        quantity_sold: number | null;
        sale_date: Date | null;
        customer_name: string | null;
        sales_representative_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sales']
    >;
    composites: {};
  };

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<
    Prisma.$salesPayload,
    S
  >;

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    salesFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SalesCountAggregateInputType | true;
  };

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales']; meta: { name: 'sales' } };
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends salesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Sales that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends salesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     *
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends salesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     *
     **/
    create<T extends salesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, salesCreateArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Sales.
     *     @param {salesCreateManyArgs} args - Arguments to create many Sales.
     *     @example
     *     // Create many Sales
     *     const sales = await prisma.sales.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends salesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     *
     **/
    delete<T extends salesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, salesDeleteArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends salesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpdateArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends salesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends salesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     **/
    upsert<T extends salesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpsertArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
     **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SalesAggregateArgs>(
      args: Subset<T, SalesAggregateArgs>,
    ): Prisma.PrismaPromise<GetSalesAggregateType<T>>;

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sales model
     */
    readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    inventory<T extends inventoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, inventoryDefaultArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<'sales', 'String'>;
    readonly product_id: FieldRef<'sales', 'String'>;
    readonly quantity_sold: FieldRef<'sales', 'Int'>;
    readonly sale_date: FieldRef<'sales', 'DateTime'>;
    readonly customer_name: FieldRef<'sales', 'String'>;
    readonly sales_representative_id: FieldRef<'sales', 'String'>;
    readonly organization_id: FieldRef<'sales', 'String'>;
    readonly created_at: FieldRef<'sales', 'DateTime'>;
    readonly updated_at: FieldRef<'sales', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>;
  };

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>;
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>;
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput;
  };

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput;
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>;
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>;
  };

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput;
  };

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
  };

  /**
   * Model supply_chain
   */

  export type AggregateSupply_chain = {
    _count: Supply_chainCountAggregateOutputType | null;
    _avg: Supply_chainAvgAggregateOutputType | null;
    _sum: Supply_chainSumAggregateOutputType | null;
    _min: Supply_chainMinAggregateOutputType | null;
    _max: Supply_chainMaxAggregateOutputType | null;
  };

  export type Supply_chainAvgAggregateOutputType = {
    quantity_supplied: number | null;
  };

  export type Supply_chainSumAggregateOutputType = {
    quantity_supplied: number | null;
  };

  export type Supply_chainMinAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    supplier: string | null;
    quantity_supplied: number | null;
    supply_date: Date | null;
    supply_chain_manager_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Supply_chainMaxAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    supplier: string | null;
    quantity_supplied: number | null;
    supply_date: Date | null;
    supply_chain_manager_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Supply_chainCountAggregateOutputType = {
    id: number;
    product_id: number;
    supplier: number;
    quantity_supplied: number;
    supply_date: number;
    supply_chain_manager_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Supply_chainAvgAggregateInputType = {
    quantity_supplied?: true;
  };

  export type Supply_chainSumAggregateInputType = {
    quantity_supplied?: true;
  };

  export type Supply_chainMinAggregateInputType = {
    id?: true;
    product_id?: true;
    supplier?: true;
    quantity_supplied?: true;
    supply_date?: true;
    supply_chain_manager_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Supply_chainMaxAggregateInputType = {
    id?: true;
    product_id?: true;
    supplier?: true;
    quantity_supplied?: true;
    supply_date?: true;
    supply_chain_manager_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Supply_chainCountAggregateInputType = {
    id?: true;
    product_id?: true;
    supplier?: true;
    quantity_supplied?: true;
    supply_date?: true;
    supply_chain_manager_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Supply_chainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supply_chain to aggregate.
     */
    where?: supply_chainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chains to fetch.
     */
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: supply_chainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned supply_chains
     **/
    _count?: true | Supply_chainCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Supply_chainAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Supply_chainSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Supply_chainMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Supply_chainMaxAggregateInputType;
  };

  export type GetSupply_chainAggregateType<T extends Supply_chainAggregateArgs> = {
    [P in keyof T & keyof AggregateSupply_chain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupply_chain[P]>
      : GetScalarType<T[P], AggregateSupply_chain[P]>;
  };

  export type supply_chainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supply_chainWhereInput;
    orderBy?: supply_chainOrderByWithAggregationInput | supply_chainOrderByWithAggregationInput[];
    by: Supply_chainScalarFieldEnum[] | Supply_chainScalarFieldEnum;
    having?: supply_chainScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Supply_chainCountAggregateInputType | true;
    _avg?: Supply_chainAvgAggregateInputType;
    _sum?: Supply_chainSumAggregateInputType;
    _min?: Supply_chainMinAggregateInputType;
    _max?: Supply_chainMaxAggregateInputType;
  };

  export type Supply_chainGroupByOutputType = {
    id: string;
    product_id: string;
    supplier: string | null;
    quantity_supplied: number | null;
    supply_date: Date | null;
    supply_chain_manager_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Supply_chainCountAggregateOutputType | null;
    _avg: Supply_chainAvgAggregateOutputType | null;
    _sum: Supply_chainSumAggregateOutputType | null;
    _min: Supply_chainMinAggregateOutputType | null;
    _max: Supply_chainMaxAggregateOutputType | null;
  };

  type GetSupply_chainGroupByPayload<T extends supply_chainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Supply_chainGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Supply_chainGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Supply_chainGroupByOutputType[P]>
          : GetScalarType<T[P], Supply_chainGroupByOutputType[P]>;
      }
    >
  >;

  export type supply_chainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        product_id?: boolean;
        supplier?: boolean;
        quantity_supplied?: boolean;
        supply_date?: boolean;
        supply_chain_manager_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        inventory?: boolean | inventoryDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['supply_chain']
    >;

  export type supply_chainSelectScalar = {
    id?: boolean;
    product_id?: boolean;
    supplier?: boolean;
    quantity_supplied?: boolean;
    supply_date?: boolean;
    supply_chain_manager_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type supply_chainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    inventory?: boolean | inventoryDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $supply_chainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'supply_chain';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      inventory: Prisma.$inventoryPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        product_id: string;
        supplier: string | null;
        quantity_supplied: number | null;
        supply_date: Date | null;
        supply_chain_manager_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['supply_chain']
    >;
    composites: {};
  };

  type supply_chainGetPayload<S extends boolean | null | undefined | supply_chainDefaultArgs> = $Result.GetResult<
    Prisma.$supply_chainPayload,
    S
  >;

  type supply_chainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    supply_chainFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Supply_chainCountAggregateInputType | true;
  };

  export interface supply_chainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supply_chain']; meta: { name: 'supply_chain' } };
    /**
     * Find zero or one Supply_chain that matches the filter.
     * @param {supply_chainFindUniqueArgs} args - Arguments to find a Supply_chain
     * @example
     * // Get one Supply_chain
     * const supply_chain = await prisma.supply_chain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends supply_chainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chainFindUniqueArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<
      $Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Supply_chain that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {supply_chainFindUniqueOrThrowArgs} args - Arguments to find a Supply_chain
     * @example
     * // Get one Supply_chain
     * const supply_chain = await prisma.supply_chain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends supply_chainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chainFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<
      $Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Supply_chain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chainFindFirstArgs} args - Arguments to find a Supply_chain
     * @example
     * // Get one Supply_chain
     * const supply_chain = await prisma.supply_chain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends supply_chainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chainFindFirstArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<
      $Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Supply_chain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chainFindFirstOrThrowArgs} args - Arguments to find a Supply_chain
     * @example
     * // Get one Supply_chain
     * const supply_chain = await prisma.supply_chain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends supply_chainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chainFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<
      $Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Supply_chains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supply_chains
     * const supply_chains = await prisma.supply_chain.findMany()
     *
     * // Get first 10 Supply_chains
     * const supply_chains = await prisma.supply_chain.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supply_chainWithIdOnly = await prisma.supply_chain.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends supply_chainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chainFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Supply_chain.
     * @param {supply_chainCreateArgs} args - Arguments to create a Supply_chain.
     * @example
     * // Create one Supply_chain
     * const Supply_chain = await prisma.supply_chain.create({
     *   data: {
     *     // ... data to create a Supply_chain
     *   }
     * })
     *
     **/
    create<T extends supply_chainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chainCreateArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Supply_chains.
     *     @param {supply_chainCreateManyArgs} args - Arguments to create many Supply_chains.
     *     @example
     *     // Create many Supply_chains
     *     const supply_chain = await prisma.supply_chain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends supply_chainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chainCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Supply_chain.
     * @param {supply_chainDeleteArgs} args - Arguments to delete one Supply_chain.
     * @example
     * // Delete one Supply_chain
     * const Supply_chain = await prisma.supply_chain.delete({
     *   where: {
     *     // ... filter to delete one Supply_chain
     *   }
     * })
     *
     **/
    delete<T extends supply_chainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chainDeleteArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Supply_chain.
     * @param {supply_chainUpdateArgs} args - Arguments to update one Supply_chain.
     * @example
     * // Update one Supply_chain
     * const supply_chain = await prisma.supply_chain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends supply_chainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chainUpdateArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Supply_chains.
     * @param {supply_chainDeleteManyArgs} args - Arguments to filter Supply_chains to delete.
     * @example
     * // Delete a few Supply_chains
     * const { count } = await prisma.supply_chain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends supply_chainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chainDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Supply_chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supply_chains
     * const supply_chain = await prisma.supply_chain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends supply_chainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chainUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Supply_chain.
     * @param {supply_chainUpsertArgs} args - Arguments to update or create a Supply_chain.
     * @example
     * // Update or create a Supply_chain
     * const supply_chain = await prisma.supply_chain.upsert({
     *   create: {
     *     // ... data to create a Supply_chain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supply_chain we want to update
     *   }
     * })
     **/
    upsert<T extends supply_chainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chainUpsertArgs<ExtArgs>>,
    ): Prisma__supply_chainClient<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Supply_chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chainCountArgs} args - Arguments to filter Supply_chains to count.
     * @example
     * // Count the number of Supply_chains
     * const count = await prisma.supply_chain.count({
     *   where: {
     *     // ... the filter for the Supply_chains we want to count
     *   }
     * })
     **/
    count<T extends supply_chainCountArgs>(
      args?: Subset<T, supply_chainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Supply_chainCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Supply_chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supply_chainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Supply_chainAggregateArgs>(
      args: Subset<T, Supply_chainAggregateArgs>,
    ): Prisma.PrismaPromise<GetSupply_chainAggregateType<T>>;

    /**
     * Group by Supply_chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends supply_chainGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supply_chainGroupByArgs['orderBy'] }
        : { orderBy?: supply_chainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, supply_chainGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSupply_chainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the supply_chain model
     */
    readonly fields: supply_chainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supply_chain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supply_chainClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    inventory<T extends inventoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, inventoryDefaultArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the supply_chain model
   */
  interface supply_chainFieldRefs {
    readonly id: FieldRef<'supply_chain', 'String'>;
    readonly product_id: FieldRef<'supply_chain', 'String'>;
    readonly supplier: FieldRef<'supply_chain', 'String'>;
    readonly quantity_supplied: FieldRef<'supply_chain', 'Int'>;
    readonly supply_date: FieldRef<'supply_chain', 'DateTime'>;
    readonly supply_chain_manager_id: FieldRef<'supply_chain', 'String'>;
    readonly organization_id: FieldRef<'supply_chain', 'String'>;
    readonly created_at: FieldRef<'supply_chain', 'DateTime'>;
    readonly updated_at: FieldRef<'supply_chain', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * supply_chain findUnique
   */
  export type supply_chainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain to fetch.
     */
    where: supply_chainWhereUniqueInput;
  };

  /**
   * supply_chain findUniqueOrThrow
   */
  export type supply_chainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain to fetch.
     */
    where: supply_chainWhereUniqueInput;
  };

  /**
   * supply_chain findFirst
   */
  export type supply_chainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain to fetch.
     */
    where?: supply_chainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chains to fetch.
     */
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for supply_chains.
     */
    cursor?: supply_chainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of supply_chains.
     */
    distinct?: Supply_chainScalarFieldEnum | Supply_chainScalarFieldEnum[];
  };

  /**
   * supply_chain findFirstOrThrow
   */
  export type supply_chainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain to fetch.
     */
    where?: supply_chainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chains to fetch.
     */
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for supply_chains.
     */
    cursor?: supply_chainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of supply_chains.
     */
    distinct?: Supply_chainScalarFieldEnum | Supply_chainScalarFieldEnum[];
  };

  /**
   * supply_chain findMany
   */
  export type supply_chainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chains to fetch.
     */
    where?: supply_chainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chains to fetch.
     */
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing supply_chains.
     */
    cursor?: supply_chainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chains.
     */
    skip?: number;
    distinct?: Supply_chainScalarFieldEnum | Supply_chainScalarFieldEnum[];
  };

  /**
   * supply_chain create
   */
  export type supply_chainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * The data needed to create a supply_chain.
     */
    data: XOR<supply_chainCreateInput, supply_chainUncheckedCreateInput>;
  };

  /**
   * supply_chain createMany
   */
  export type supply_chainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supply_chains.
     */
    data: supply_chainCreateManyInput | supply_chainCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * supply_chain update
   */
  export type supply_chainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * The data needed to update a supply_chain.
     */
    data: XOR<supply_chainUpdateInput, supply_chainUncheckedUpdateInput>;
    /**
     * Choose, which supply_chain to update.
     */
    where: supply_chainWhereUniqueInput;
  };

  /**
   * supply_chain updateMany
   */
  export type supply_chainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supply_chains.
     */
    data: XOR<supply_chainUpdateManyMutationInput, supply_chainUncheckedUpdateManyInput>;
    /**
     * Filter which supply_chains to update
     */
    where?: supply_chainWhereInput;
  };

  /**
   * supply_chain upsert
   */
  export type supply_chainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * The filter to search for the supply_chain to update in case it exists.
     */
    where: supply_chainWhereUniqueInput;
    /**
     * In case the supply_chain found by the `where` argument doesn't exist, create a new supply_chain with this data.
     */
    create: XOR<supply_chainCreateInput, supply_chainUncheckedCreateInput>;
    /**
     * In case the supply_chain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supply_chainUpdateInput, supply_chainUncheckedUpdateInput>;
  };

  /**
   * supply_chain delete
   */
  export type supply_chainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    /**
     * Filter which supply_chain to delete.
     */
    where: supply_chainWhereUniqueInput;
  };

  /**
   * supply_chain deleteMany
   */
  export type supply_chainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supply_chains to delete
     */
    where?: supply_chainWhereInput;
  };

  /**
   * supply_chain without action
   */
  export type supply_chainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      customer?: boolean | user$customerArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      sales?: boolean | user$salesArgs<ExtArgs>;
      supply_chain?: boolean | user$supply_chainArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | user$customerArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    sales?: boolean | user$salesArgs<ExtArgs>;
    supply_chain?: boolean | user$supply_chainArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      sales: Prisma.$salesPayload<ExtArgs>[];
      supply_chain: Prisma.$supply_chainPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    sales<T extends user$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, user$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    supply_chain<T extends user$supply_chainArgs<ExtArgs> = {}>(
      args?: Subset<T, user$supply_chainArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supply_chainPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.sales
   */
  export type user$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * user.supply_chain
   */
  export type user$supply_chainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain
     */
    select?: supply_chainSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chainInclude<ExtArgs> | null;
    where?: supply_chainWhereInput;
    orderBy?: supply_chainOrderByWithRelationInput | supply_chainOrderByWithRelationInput[];
    cursor?: supply_chainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Supply_chainScalarFieldEnum | Supply_chainScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    phone_number: 'phone_number';
    email: 'email';
    organization_id: 'organization_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const InventoryScalarFieldEnum: {
    id: 'id';
    product_name: 'product_name';
    product_description: 'product_description';
    quantity: 'quantity';
    price: 'price';
    supplier: 'supplier';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    established_date: 'established_date';
    industry: 'industry';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const SalesScalarFieldEnum: {
    id: 'id';
    product_id: 'product_id';
    quantity_sold: 'quantity_sold';
    sale_date: 'sale_date';
    customer_name: 'customer_name';
    sales_representative_id: 'sales_representative_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum];

  export const Supply_chainScalarFieldEnum: {
    id: 'id';
    product_id: 'product_id';
    supplier: 'supplier';
    quantity_supplied: 'quantity_supplied';
    supply_date: 'supply_date';
    supply_chain_manager_id: 'supply_chain_manager_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Supply_chainScalarFieldEnum =
    (typeof Supply_chainScalarFieldEnum)[keyof typeof Supply_chainScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    name?: StringFilter<'customer'> | string;
    address?: StringNullableFilter<'customer'> | string | null;
    phone_number?: StringNullableFilter<'customer'> | string | null;
    email?: StringNullableFilter<'customer'> | string | null;
    organization_id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    organization_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      name?: StringFilter<'customer'> | string;
      address?: StringNullableFilter<'customer'> | string | null;
      phone_number?: StringNullableFilter<'customer'> | string | null;
      email?: StringNullableFilter<'customer'> | string | null;
      organization_id?: UuidFilter<'customer'> | string;
      user_id?: UuidFilter<'customer'> | string;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    organization_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    name?: StringWithAggregatesFilter<'customer'> | string;
    address?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    email?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    organization_id?: UuidWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[];
    OR?: inventoryWhereInput[];
    NOT?: inventoryWhereInput | inventoryWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    product_name?: StringFilter<'inventory'> | string;
    product_description?: StringNullableFilter<'inventory'> | string | null;
    quantity?: IntNullableFilter<'inventory'> | number | null;
    price?: IntNullableFilter<'inventory'> | number | null;
    supplier?: StringNullableFilter<'inventory'> | string | null;
    organization_id?: UuidFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    sales?: SalesListRelationFilter;
    supply_chain?: Supply_chainListRelationFilter;
  };

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder;
    product_name?: SortOrder;
    product_description?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    supplier?: SortOrderInput | SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    sales?: salesOrderByRelationAggregateInput;
    supply_chain?: supply_chainOrderByRelationAggregateInput;
  };

  export type inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: inventoryWhereInput | inventoryWhereInput[];
      OR?: inventoryWhereInput[];
      NOT?: inventoryWhereInput | inventoryWhereInput[];
      product_name?: StringFilter<'inventory'> | string;
      product_description?: StringNullableFilter<'inventory'> | string | null;
      quantity?: IntNullableFilter<'inventory'> | number | null;
      price?: IntNullableFilter<'inventory'> | number | null;
      supplier?: StringNullableFilter<'inventory'> | string | null;
      organization_id?: UuidFilter<'inventory'> | string;
      created_at?: DateTimeFilter<'inventory'> | Date | string;
      updated_at?: DateTimeFilter<'inventory'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      sales?: SalesListRelationFilter;
      supply_chain?: Supply_chainListRelationFilter;
    },
    'id'
  >;

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    product_name?: SortOrder;
    product_description?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    supplier?: SortOrderInput | SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: inventoryCountOrderByAggregateInput;
    _avg?: inventoryAvgOrderByAggregateInput;
    _max?: inventoryMaxOrderByAggregateInput;
    _min?: inventoryMinOrderByAggregateInput;
    _sum?: inventorySumOrderByAggregateInput;
  };

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    OR?: inventoryScalarWhereWithAggregatesInput[];
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'inventory'> | string;
    product_name?: StringWithAggregatesFilter<'inventory'> | string;
    product_description?: StringNullableWithAggregatesFilter<'inventory'> | string | null;
    quantity?: IntNullableWithAggregatesFilter<'inventory'> | number | null;
    price?: IntNullableWithAggregatesFilter<'inventory'> | number | null;
    supplier?: StringNullableWithAggregatesFilter<'inventory'> | string | null;
    organization_id?: UuidWithAggregatesFilter<'inventory'> | string;
    created_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    location?: StringNullableFilter<'organization'> | string | null;
    established_date?: DateTimeNullableFilter<'organization'> | Date | string | null;
    industry?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    customer?: CustomerListRelationFilter;
    inventory?: InventoryListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    sales?: SalesListRelationFilter;
    supply_chain?: Supply_chainListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    customer?: customerOrderByRelationAggregateInput;
    inventory?: inventoryOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    sales?: salesOrderByRelationAggregateInput;
    supply_chain?: supply_chainOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      location?: StringNullableFilter<'organization'> | string | null;
      established_date?: DateTimeNullableFilter<'organization'> | Date | string | null;
      industry?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      customer?: CustomerListRelationFilter;
      inventory?: InventoryListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      sales?: SalesListRelationFilter;
      supply_chain?: Supply_chainListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    location?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    established_date?: DateTimeNullableWithAggregatesFilter<'organization'> | Date | string | null;
    industry?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[];
    OR?: salesWhereInput[];
    NOT?: salesWhereInput | salesWhereInput[];
    id?: UuidFilter<'sales'> | string;
    product_id?: UuidFilter<'sales'> | string;
    quantity_sold?: IntNullableFilter<'sales'> | number | null;
    sale_date?: DateTimeNullableFilter<'sales'> | Date | string | null;
    customer_name?: StringNullableFilter<'sales'> | string | null;
    sales_representative_id?: UuidFilter<'sales'> | string;
    organization_id?: UuidFilter<'sales'> | string;
    created_at?: DateTimeFilter<'sales'> | Date | string;
    updated_at?: DateTimeFilter<'sales'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    inventory?: XOR<InventoryRelationFilter, inventoryWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type salesOrderByWithRelationInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity_sold?: SortOrderInput | SortOrder;
    sale_date?: SortOrderInput | SortOrder;
    customer_name?: SortOrderInput | SortOrder;
    sales_representative_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    inventory?: inventoryOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type salesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: salesWhereInput | salesWhereInput[];
      OR?: salesWhereInput[];
      NOT?: salesWhereInput | salesWhereInput[];
      product_id?: UuidFilter<'sales'> | string;
      quantity_sold?: IntNullableFilter<'sales'> | number | null;
      sale_date?: DateTimeNullableFilter<'sales'> | Date | string | null;
      customer_name?: StringNullableFilter<'sales'> | string | null;
      sales_representative_id?: UuidFilter<'sales'> | string;
      organization_id?: UuidFilter<'sales'> | string;
      created_at?: DateTimeFilter<'sales'> | Date | string;
      updated_at?: DateTimeFilter<'sales'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      inventory?: XOR<InventoryRelationFilter, inventoryWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity_sold?: SortOrderInput | SortOrder;
    sale_date?: SortOrderInput | SortOrder;
    customer_name?: SortOrderInput | SortOrder;
    sales_representative_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: salesCountOrderByAggregateInput;
    _avg?: salesAvgOrderByAggregateInput;
    _max?: salesMaxOrderByAggregateInput;
    _min?: salesMinOrderByAggregateInput;
    _sum?: salesSumOrderByAggregateInput;
  };

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[];
    OR?: salesScalarWhereWithAggregatesInput[];
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sales'> | string;
    product_id?: UuidWithAggregatesFilter<'sales'> | string;
    quantity_sold?: IntNullableWithAggregatesFilter<'sales'> | number | null;
    sale_date?: DateTimeNullableWithAggregatesFilter<'sales'> | Date | string | null;
    customer_name?: StringNullableWithAggregatesFilter<'sales'> | string | null;
    sales_representative_id?: UuidWithAggregatesFilter<'sales'> | string;
    organization_id?: UuidWithAggregatesFilter<'sales'> | string;
    created_at?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
  };

  export type supply_chainWhereInput = {
    AND?: supply_chainWhereInput | supply_chainWhereInput[];
    OR?: supply_chainWhereInput[];
    NOT?: supply_chainWhereInput | supply_chainWhereInput[];
    id?: UuidFilter<'supply_chain'> | string;
    product_id?: UuidFilter<'supply_chain'> | string;
    supplier?: StringNullableFilter<'supply_chain'> | string | null;
    quantity_supplied?: IntNullableFilter<'supply_chain'> | number | null;
    supply_date?: DateTimeNullableFilter<'supply_chain'> | Date | string | null;
    supply_chain_manager_id?: UuidFilter<'supply_chain'> | string;
    organization_id?: UuidFilter<'supply_chain'> | string;
    created_at?: DateTimeFilter<'supply_chain'> | Date | string;
    updated_at?: DateTimeFilter<'supply_chain'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    inventory?: XOR<InventoryRelationFilter, inventoryWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type supply_chainOrderByWithRelationInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    supplier?: SortOrderInput | SortOrder;
    quantity_supplied?: SortOrderInput | SortOrder;
    supply_date?: SortOrderInput | SortOrder;
    supply_chain_manager_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    inventory?: inventoryOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type supply_chainWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: supply_chainWhereInput | supply_chainWhereInput[];
      OR?: supply_chainWhereInput[];
      NOT?: supply_chainWhereInput | supply_chainWhereInput[];
      product_id?: UuidFilter<'supply_chain'> | string;
      supplier?: StringNullableFilter<'supply_chain'> | string | null;
      quantity_supplied?: IntNullableFilter<'supply_chain'> | number | null;
      supply_date?: DateTimeNullableFilter<'supply_chain'> | Date | string | null;
      supply_chain_manager_id?: UuidFilter<'supply_chain'> | string;
      organization_id?: UuidFilter<'supply_chain'> | string;
      created_at?: DateTimeFilter<'supply_chain'> | Date | string;
      updated_at?: DateTimeFilter<'supply_chain'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      inventory?: XOR<InventoryRelationFilter, inventoryWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type supply_chainOrderByWithAggregationInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    supplier?: SortOrderInput | SortOrder;
    quantity_supplied?: SortOrderInput | SortOrder;
    supply_date?: SortOrderInput | SortOrder;
    supply_chain_manager_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: supply_chainCountOrderByAggregateInput;
    _avg?: supply_chainAvgOrderByAggregateInput;
    _max?: supply_chainMaxOrderByAggregateInput;
    _min?: supply_chainMinOrderByAggregateInput;
    _sum?: supply_chainSumOrderByAggregateInput;
  };

  export type supply_chainScalarWhereWithAggregatesInput = {
    AND?: supply_chainScalarWhereWithAggregatesInput | supply_chainScalarWhereWithAggregatesInput[];
    OR?: supply_chainScalarWhereWithAggregatesInput[];
    NOT?: supply_chainScalarWhereWithAggregatesInput | supply_chainScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'supply_chain'> | string;
    product_id?: UuidWithAggregatesFilter<'supply_chain'> | string;
    supplier?: StringNullableWithAggregatesFilter<'supply_chain'> | string | null;
    quantity_supplied?: IntNullableWithAggregatesFilter<'supply_chain'> | number | null;
    supply_date?: DateTimeNullableWithAggregatesFilter<'supply_chain'> | Date | string | null;
    supply_chain_manager_id?: UuidWithAggregatesFilter<'supply_chain'> | string;
    organization_id?: UuidWithAggregatesFilter<'supply_chain'> | string;
    created_at?: DateTimeWithAggregatesFilter<'supply_chain'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'supply_chain'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    customer?: CustomerListRelationFilter;
    organization?: OrganizationListRelationFilter;
    sales?: SalesListRelationFilter;
    supply_chain?: Supply_chainListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    sales?: salesOrderByRelationAggregateInput;
    supply_chain?: supply_chainOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      customer?: CustomerListRelationFilter;
      organization?: OrganizationListRelationFilter;
      sales?: SalesListRelationFilter;
      supply_chain?: Supply_chainListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutCustomerInput;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    organization_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutCustomerNestedInput;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    organization_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInventoryInput;
    sales?: salesCreateNestedManyWithoutInventoryInput;
    supply_chain?: supply_chainCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: salesUncheckedCreateNestedManyWithoutInventoryInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInventoryNestedInput;
    sales?: salesUpdateManyWithoutInventoryNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: salesUncheckedUpdateManyWithoutInventoryNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutInventoryNestedInput;
  };

  export type inventoryCreateManyInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer?: customerCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    sales?: salesCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer?: customerUncheckedCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    sales?: salesUncheckedCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    sales?: salesUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUncheckedUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    sales?: salesUncheckedUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type salesCreateInput = {
    id?: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSalesInput;
    inventory: inventoryCreateNestedOneWithoutSalesInput;
    user: userCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateInput = {
    id?: string;
    product_id: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    sales_representative_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSalesNestedInput;
    inventory?: inventoryUpdateOneRequiredWithoutSalesNestedInput;
    user?: userUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sales_representative_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesCreateManyInput = {
    id?: string;
    product_id: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    sales_representative_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sales_representative_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainCreateInput = {
    id?: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSupply_chainInput;
    inventory: inventoryCreateNestedOneWithoutSupply_chainInput;
    user: userCreateNestedOneWithoutSupply_chainInput;
  };

  export type supply_chainUncheckedCreateInput = {
    id?: string;
    product_id: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    supply_chain_manager_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSupply_chainNestedInput;
    inventory?: inventoryUpdateOneRequiredWithoutSupply_chainNestedInput;
    user?: userUpdateOneRequiredWithoutSupply_chainNestedInput;
  };

  export type supply_chainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supply_chain_manager_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainCreateManyInput = {
    id?: string;
    product_id: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    supply_chain_manager_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supply_chain_manager_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type SalesListRelationFilter = {
    every?: salesWhereInput;
    some?: salesWhereInput;
    none?: salesWhereInput;
  };

  export type Supply_chainListRelationFilter = {
    every?: supply_chainWhereInput;
    some?: supply_chainWhereInput;
    none?: supply_chainWhereInput;
  };

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type supply_chainOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    product_name?: SortOrder;
    product_description?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    supplier?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    price?: SortOrder;
  };

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    product_name?: SortOrder;
    product_description?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    supplier?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    product_name?: SortOrder;
    product_description?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    supplier?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
    price?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput;
    some?: inventoryWhereInput;
    none?: inventoryWhereInput;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type InventoryRelationFilter = {
    is?: inventoryWhereInput;
    isNot?: inventoryWhereInput;
  };

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity_sold?: SortOrder;
    sale_date?: SortOrder;
    customer_name?: SortOrder;
    sales_representative_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesAvgOrderByAggregateInput = {
    quantity_sold?: SortOrder;
  };

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity_sold?: SortOrder;
    sale_date?: SortOrder;
    customer_name?: SortOrder;
    sales_representative_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity_sold?: SortOrder;
    sale_date?: SortOrder;
    customer_name?: SortOrder;
    sales_representative_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesSumOrderByAggregateInput = {
    quantity_sold?: SortOrder;
  };

  export type supply_chainCountOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    supplier?: SortOrder;
    quantity_supplied?: SortOrder;
    supply_date?: SortOrder;
    supply_chain_manager_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type supply_chainAvgOrderByAggregateInput = {
    quantity_supplied?: SortOrder;
  };

  export type supply_chainMaxOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    supplier?: SortOrder;
    quantity_supplied?: SortOrder;
    supply_date?: SortOrder;
    supply_chain_manager_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type supply_chainMinOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    supplier?: SortOrder;
    quantity_supplied?: SortOrder;
    supply_date?: SortOrder;
    supply_chain_manager_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type supply_chainSumOrderByAggregateInput = {
    quantity_supplied?: SortOrder;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutCustomerInput = {
    create?: XOR<organizationCreateWithoutCustomerInput, organizationUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutCustomerInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type organizationUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<organizationCreateWithoutCustomerInput, organizationUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutCustomerInput;
    upsert?: organizationUpsertWithoutCustomerInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutCustomerInput, organizationUpdateWithoutCustomerInput>,
      organizationUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type organizationCreateNestedOneWithoutInventoryInput = {
    create?: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutInventoryInput;
    connect?: organizationWhereUniqueInput;
  };

  export type salesCreateNestedManyWithoutInventoryInput = {
    create?:
      | XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>
      | salesCreateWithoutInventoryInput[]
      | salesUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[];
    createMany?: salesCreateManyInventoryInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type supply_chainCreateNestedManyWithoutInventoryInput = {
    create?:
      | XOR<supply_chainCreateWithoutInventoryInput, supply_chainUncheckedCreateWithoutInventoryInput>
      | supply_chainCreateWithoutInventoryInput[]
      | supply_chainUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutInventoryInput
      | supply_chainCreateOrConnectWithoutInventoryInput[];
    createMany?: supply_chainCreateManyInventoryInputEnvelope;
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutInventoryInput = {
    create?:
      | XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>
      | salesCreateWithoutInventoryInput[]
      | salesUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[];
    createMany?: salesCreateManyInventoryInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type supply_chainUncheckedCreateNestedManyWithoutInventoryInput = {
    create?:
      | XOR<supply_chainCreateWithoutInventoryInput, supply_chainUncheckedCreateWithoutInventoryInput>
      | supply_chainCreateWithoutInventoryInput[]
      | supply_chainUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutInventoryInput
      | supply_chainCreateOrConnectWithoutInventoryInput[];
    createMany?: supply_chainCreateManyInventoryInputEnvelope;
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type organizationUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutInventoryInput;
    upsert?: organizationUpsertWithoutInventoryInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutInventoryInput, organizationUpdateWithoutInventoryInput>,
      organizationUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type salesUpdateManyWithoutInventoryNestedInput = {
    create?:
      | XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>
      | salesCreateWithoutInventoryInput[]
      | salesUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutInventoryInput | salesUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: salesCreateManyInventoryInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutInventoryInput | salesUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?: salesUpdateManyWithWhereWithoutInventoryInput | salesUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type supply_chainUpdateManyWithoutInventoryNestedInput = {
    create?:
      | XOR<supply_chainCreateWithoutInventoryInput, supply_chainUncheckedCreateWithoutInventoryInput>
      | supply_chainCreateWithoutInventoryInput[]
      | supply_chainUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutInventoryInput
      | supply_chainCreateOrConnectWithoutInventoryInput[];
    upsert?:
      | supply_chainUpsertWithWhereUniqueWithoutInventoryInput
      | supply_chainUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: supply_chainCreateManyInventoryInputEnvelope;
    set?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    disconnect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    delete?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    update?:
      | supply_chainUpdateWithWhereUniqueWithoutInventoryInput
      | supply_chainUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?:
      | supply_chainUpdateManyWithWhereWithoutInventoryInput
      | supply_chainUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?:
      | XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>
      | salesCreateWithoutInventoryInput[]
      | salesUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutInventoryInput | salesUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: salesCreateManyInventoryInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutInventoryInput | salesUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?: salesUpdateManyWithWhereWithoutInventoryInput | salesUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type supply_chainUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?:
      | XOR<supply_chainCreateWithoutInventoryInput, supply_chainUncheckedCreateWithoutInventoryInput>
      | supply_chainCreateWithoutInventoryInput[]
      | supply_chainUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutInventoryInput
      | supply_chainCreateOrConnectWithoutInventoryInput[];
    upsert?:
      | supply_chainUpsertWithWhereUniqueWithoutInventoryInput
      | supply_chainUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: supply_chainCreateManyInventoryInputEnvelope;
    set?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    disconnect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    delete?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    update?:
      | supply_chainUpdateWithWhereUniqueWithoutInventoryInput
      | supply_chainUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?:
      | supply_chainUpdateManyWithWhereWithoutInventoryInput
      | supply_chainUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
  };

  export type customerCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<customerCreateWithoutOrganizationInput, customerUncheckedCreateWithoutOrganizationInput>
      | customerCreateWithoutOrganizationInput[]
      | customerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | customerCreateOrConnectWithoutOrganizationInput
      | customerCreateOrConnectWithoutOrganizationInput[];
    createMany?: customerCreateManyOrganizationInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type inventoryCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type salesCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<salesCreateWithoutOrganizationInput, salesUncheckedCreateWithoutOrganizationInput>
      | salesCreateWithoutOrganizationInput[]
      | salesUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: salesCreateOrConnectWithoutOrganizationInput | salesCreateOrConnectWithoutOrganizationInput[];
    createMany?: salesCreateManyOrganizationInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type supply_chainCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<supply_chainCreateWithoutOrganizationInput, supply_chainUncheckedCreateWithoutOrganizationInput>
      | supply_chainCreateWithoutOrganizationInput[]
      | supply_chainUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutOrganizationInput
      | supply_chainCreateOrConnectWithoutOrganizationInput[];
    createMany?: supply_chainCreateManyOrganizationInputEnvelope;
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<customerCreateWithoutOrganizationInput, customerUncheckedCreateWithoutOrganizationInput>
      | customerCreateWithoutOrganizationInput[]
      | customerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | customerCreateOrConnectWithoutOrganizationInput
      | customerCreateOrConnectWithoutOrganizationInput[];
    createMany?: customerCreateManyOrganizationInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<salesCreateWithoutOrganizationInput, salesUncheckedCreateWithoutOrganizationInput>
      | salesCreateWithoutOrganizationInput[]
      | salesUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: salesCreateOrConnectWithoutOrganizationInput | salesCreateOrConnectWithoutOrganizationInput[];
    createMany?: salesCreateManyOrganizationInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type supply_chainUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<supply_chainCreateWithoutOrganizationInput, supply_chainUncheckedCreateWithoutOrganizationInput>
      | supply_chainCreateWithoutOrganizationInput[]
      | supply_chainUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutOrganizationInput
      | supply_chainCreateOrConnectWithoutOrganizationInput[];
    createMany?: supply_chainCreateManyOrganizationInputEnvelope;
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type customerUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<customerCreateWithoutOrganizationInput, customerUncheckedCreateWithoutOrganizationInput>
      | customerCreateWithoutOrganizationInput[]
      | customerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | customerCreateOrConnectWithoutOrganizationInput
      | customerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | customerUpsertWithWhereUniqueWithoutOrganizationInput
      | customerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: customerCreateManyOrganizationInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?:
      | customerUpdateWithWhereUniqueWithoutOrganizationInput
      | customerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | customerUpdateManyWithWhereWithoutOrganizationInput
      | customerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type inventoryUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?:
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | inventoryUpdateManyWithWhereWithoutOrganizationInput
      | inventoryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type salesUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<salesCreateWithoutOrganizationInput, salesUncheckedCreateWithoutOrganizationInput>
      | salesCreateWithoutOrganizationInput[]
      | salesUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: salesCreateOrConnectWithoutOrganizationInput | salesCreateOrConnectWithoutOrganizationInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutOrganizationInput | salesUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: salesCreateManyOrganizationInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutOrganizationInput | salesUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: salesUpdateManyWithWhereWithoutOrganizationInput | salesUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type supply_chainUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<supply_chainCreateWithoutOrganizationInput, supply_chainUncheckedCreateWithoutOrganizationInput>
      | supply_chainCreateWithoutOrganizationInput[]
      | supply_chainUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutOrganizationInput
      | supply_chainCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | supply_chainUpsertWithWhereUniqueWithoutOrganizationInput
      | supply_chainUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: supply_chainCreateManyOrganizationInputEnvelope;
    set?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    disconnect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    delete?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    update?:
      | supply_chainUpdateWithWhereUniqueWithoutOrganizationInput
      | supply_chainUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | supply_chainUpdateManyWithWhereWithoutOrganizationInput
      | supply_chainUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<customerCreateWithoutOrganizationInput, customerUncheckedCreateWithoutOrganizationInput>
      | customerCreateWithoutOrganizationInput[]
      | customerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | customerCreateOrConnectWithoutOrganizationInput
      | customerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | customerUpsertWithWhereUniqueWithoutOrganizationInput
      | customerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: customerCreateManyOrganizationInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?:
      | customerUpdateWithWhereUniqueWithoutOrganizationInput
      | customerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | customerUpdateManyWithWhereWithoutOrganizationInput
      | customerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?:
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | inventoryUpdateManyWithWhereWithoutOrganizationInput
      | inventoryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<salesCreateWithoutOrganizationInput, salesUncheckedCreateWithoutOrganizationInput>
      | salesCreateWithoutOrganizationInput[]
      | salesUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: salesCreateOrConnectWithoutOrganizationInput | salesCreateOrConnectWithoutOrganizationInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutOrganizationInput | salesUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: salesCreateManyOrganizationInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutOrganizationInput | salesUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: salesUpdateManyWithWhereWithoutOrganizationInput | salesUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type supply_chainUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<supply_chainCreateWithoutOrganizationInput, supply_chainUncheckedCreateWithoutOrganizationInput>
      | supply_chainCreateWithoutOrganizationInput[]
      | supply_chainUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | supply_chainCreateOrConnectWithoutOrganizationInput
      | supply_chainCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | supply_chainUpsertWithWhereUniqueWithoutOrganizationInput
      | supply_chainUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: supply_chainCreateManyOrganizationInputEnvelope;
    set?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    disconnect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    delete?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    update?:
      | supply_chainUpdateWithWhereUniqueWithoutOrganizationInput
      | supply_chainUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | supply_chainUpdateManyWithWhereWithoutOrganizationInput
      | supply_chainUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
  };

  export type organizationCreateNestedOneWithoutSalesInput = {
    create?: XOR<organizationCreateWithoutSalesInput, organizationUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutSalesInput;
    connect?: organizationWhereUniqueInput;
  };

  export type inventoryCreateNestedOneWithoutSalesInput = {
    create?: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: inventoryCreateOrConnectWithoutSalesInput;
    connect?: inventoryWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutSalesInput = {
    create?: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: userCreateOrConnectWithoutSalesInput;
    connect?: userWhereUniqueInput;
  };

  export type organizationUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<organizationCreateWithoutSalesInput, organizationUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutSalesInput;
    upsert?: organizationUpsertWithoutSalesInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutSalesInput, organizationUpdateWithoutSalesInput>,
      organizationUncheckedUpdateWithoutSalesInput
    >;
  };

  export type inventoryUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: inventoryCreateOrConnectWithoutSalesInput;
    upsert?: inventoryUpsertWithoutSalesInput;
    connect?: inventoryWhereUniqueInput;
    update?: XOR<
      XOR<inventoryUpdateToOneWithWhereWithoutSalesInput, inventoryUpdateWithoutSalesInput>,
      inventoryUncheckedUpdateWithoutSalesInput
    >;
  };

  export type userUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: userCreateOrConnectWithoutSalesInput;
    upsert?: userUpsertWithoutSalesInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSalesInput, userUpdateWithoutSalesInput>,
      userUncheckedUpdateWithoutSalesInput
    >;
  };

  export type organizationCreateNestedOneWithoutSupply_chainInput = {
    create?: XOR<organizationCreateWithoutSupply_chainInput, organizationUncheckedCreateWithoutSupply_chainInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutSupply_chainInput;
    connect?: organizationWhereUniqueInput;
  };

  export type inventoryCreateNestedOneWithoutSupply_chainInput = {
    create?: XOR<inventoryCreateWithoutSupply_chainInput, inventoryUncheckedCreateWithoutSupply_chainInput>;
    connectOrCreate?: inventoryCreateOrConnectWithoutSupply_chainInput;
    connect?: inventoryWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutSupply_chainInput = {
    create?: XOR<userCreateWithoutSupply_chainInput, userUncheckedCreateWithoutSupply_chainInput>;
    connectOrCreate?: userCreateOrConnectWithoutSupply_chainInput;
    connect?: userWhereUniqueInput;
  };

  export type organizationUpdateOneRequiredWithoutSupply_chainNestedInput = {
    create?: XOR<organizationCreateWithoutSupply_chainInput, organizationUncheckedCreateWithoutSupply_chainInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutSupply_chainInput;
    upsert?: organizationUpsertWithoutSupply_chainInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutSupply_chainInput, organizationUpdateWithoutSupply_chainInput>,
      organizationUncheckedUpdateWithoutSupply_chainInput
    >;
  };

  export type inventoryUpdateOneRequiredWithoutSupply_chainNestedInput = {
    create?: XOR<inventoryCreateWithoutSupply_chainInput, inventoryUncheckedCreateWithoutSupply_chainInput>;
    connectOrCreate?: inventoryCreateOrConnectWithoutSupply_chainInput;
    upsert?: inventoryUpsertWithoutSupply_chainInput;
    connect?: inventoryWhereUniqueInput;
    update?: XOR<
      XOR<inventoryUpdateToOneWithWhereWithoutSupply_chainInput, inventoryUpdateWithoutSupply_chainInput>,
      inventoryUncheckedUpdateWithoutSupply_chainInput
    >;
  };

  export type userUpdateOneRequiredWithoutSupply_chainNestedInput = {
    create?: XOR<userCreateWithoutSupply_chainInput, userUncheckedCreateWithoutSupply_chainInput>;
    connectOrCreate?: userCreateOrConnectWithoutSupply_chainInput;
    upsert?: userUpsertWithoutSupply_chainInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSupply_chainInput, userUpdateWithoutSupply_chainInput>,
      userUncheckedUpdateWithoutSupply_chainInput
    >;
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type salesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type supply_chainCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<supply_chainCreateWithoutUserInput, supply_chainUncheckedCreateWithoutUserInput>
      | supply_chainCreateWithoutUserInput[]
      | supply_chainUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supply_chainCreateOrConnectWithoutUserInput | supply_chainCreateOrConnectWithoutUserInput[];
    createMany?: supply_chainCreateManyUserInputEnvelope;
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type supply_chainUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<supply_chainCreateWithoutUserInput, supply_chainUncheckedCreateWithoutUserInput>
      | supply_chainCreateWithoutUserInput[]
      | supply_chainUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supply_chainCreateOrConnectWithoutUserInput | supply_chainCreateOrConnectWithoutUserInput[];
    createMany?: supply_chainCreateManyUserInputEnvelope;
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type salesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type supply_chainUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<supply_chainCreateWithoutUserInput, supply_chainUncheckedCreateWithoutUserInput>
      | supply_chainCreateWithoutUserInput[]
      | supply_chainUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supply_chainCreateOrConnectWithoutUserInput | supply_chainCreateOrConnectWithoutUserInput[];
    upsert?: supply_chainUpsertWithWhereUniqueWithoutUserInput | supply_chainUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: supply_chainCreateManyUserInputEnvelope;
    set?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    disconnect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    delete?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    update?: supply_chainUpdateWithWhereUniqueWithoutUserInput | supply_chainUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: supply_chainUpdateManyWithWhereWithoutUserInput | supply_chainUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
      | salesCreateWithoutUserInput[]
      | salesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: salesCreateManyUserInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type supply_chainUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<supply_chainCreateWithoutUserInput, supply_chainUncheckedCreateWithoutUserInput>
      | supply_chainCreateWithoutUserInput[]
      | supply_chainUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supply_chainCreateOrConnectWithoutUserInput | supply_chainCreateOrConnectWithoutUserInput[];
    upsert?: supply_chainUpsertWithWhereUniqueWithoutUserInput | supply_chainUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: supply_chainCreateManyUserInputEnvelope;
    set?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    disconnect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    delete?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    connect?: supply_chainWhereUniqueInput | supply_chainWhereUniqueInput[];
    update?: supply_chainUpdateWithWhereUniqueWithoutUserInput | supply_chainUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: supply_chainUpdateManyWithWhereWithoutUserInput | supply_chainUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutCustomerInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    sales?: salesCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutCustomerInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    sales?: salesUncheckedCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutCustomerInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutCustomerInput, organizationUncheckedCreateWithoutCustomerInput>;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type organizationUpsertWithoutCustomerInput = {
    update: XOR<organizationUpdateWithoutCustomerInput, organizationUncheckedUpdateWithoutCustomerInput>;
    create: XOR<organizationCreateWithoutCustomerInput, organizationUncheckedCreateWithoutCustomerInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutCustomerInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutCustomerInput, organizationUncheckedUpdateWithoutCustomerInput>;
  };

  export type organizationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    sales?: salesUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    sales?: salesUncheckedUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type organizationCreateWithoutInventoryInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer?: customerCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    sales?: salesCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutInventoryInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer?: customerUncheckedCreateNestedManyWithoutOrganizationInput;
    sales?: salesUncheckedCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutInventoryInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
  };

  export type salesCreateWithoutInventoryInput = {
    id?: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSalesInput;
    user: userCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutInventoryInput = {
    id?: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    sales_representative_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateOrConnectWithoutInventoryInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>;
  };

  export type salesCreateManyInventoryInputEnvelope = {
    data: salesCreateManyInventoryInput | salesCreateManyInventoryInput[];
    skipDuplicates?: boolean;
  };

  export type supply_chainCreateWithoutInventoryInput = {
    id?: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSupply_chainInput;
    user: userCreateNestedOneWithoutSupply_chainInput;
  };

  export type supply_chainUncheckedCreateWithoutInventoryInput = {
    id?: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    supply_chain_manager_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainCreateOrConnectWithoutInventoryInput = {
    where: supply_chainWhereUniqueInput;
    create: XOR<supply_chainCreateWithoutInventoryInput, supply_chainUncheckedCreateWithoutInventoryInput>;
  };

  export type supply_chainCreateManyInventoryInputEnvelope = {
    data: supply_chainCreateManyInventoryInput | supply_chainCreateManyInventoryInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutInventoryInput = {
    update: XOR<organizationUpdateWithoutInventoryInput, organizationUncheckedUpdateWithoutInventoryInput>;
    create: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutInventoryInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutInventoryInput, organizationUncheckedUpdateWithoutInventoryInput>;
  };

  export type organizationUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    sales?: salesUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUncheckedUpdateManyWithoutOrganizationNestedInput;
    sales?: salesUncheckedUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type salesUpsertWithWhereUniqueWithoutInventoryInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutInventoryInput, salesUncheckedUpdateWithoutInventoryInput>;
    create: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutInventoryInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutInventoryInput, salesUncheckedUpdateWithoutInventoryInput>;
  };

  export type salesUpdateManyWithWhereWithoutInventoryInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutInventoryInput>;
  };

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[];
    OR?: salesScalarWhereInput[];
    NOT?: salesScalarWhereInput | salesScalarWhereInput[];
    id?: UuidFilter<'sales'> | string;
    product_id?: UuidFilter<'sales'> | string;
    quantity_sold?: IntNullableFilter<'sales'> | number | null;
    sale_date?: DateTimeNullableFilter<'sales'> | Date | string | null;
    customer_name?: StringNullableFilter<'sales'> | string | null;
    sales_representative_id?: UuidFilter<'sales'> | string;
    organization_id?: UuidFilter<'sales'> | string;
    created_at?: DateTimeFilter<'sales'> | Date | string;
    updated_at?: DateTimeFilter<'sales'> | Date | string;
  };

  export type supply_chainUpsertWithWhereUniqueWithoutInventoryInput = {
    where: supply_chainWhereUniqueInput;
    update: XOR<supply_chainUpdateWithoutInventoryInput, supply_chainUncheckedUpdateWithoutInventoryInput>;
    create: XOR<supply_chainCreateWithoutInventoryInput, supply_chainUncheckedCreateWithoutInventoryInput>;
  };

  export type supply_chainUpdateWithWhereUniqueWithoutInventoryInput = {
    where: supply_chainWhereUniqueInput;
    data: XOR<supply_chainUpdateWithoutInventoryInput, supply_chainUncheckedUpdateWithoutInventoryInput>;
  };

  export type supply_chainUpdateManyWithWhereWithoutInventoryInput = {
    where: supply_chainScalarWhereInput;
    data: XOR<supply_chainUpdateManyMutationInput, supply_chainUncheckedUpdateManyWithoutInventoryInput>;
  };

  export type supply_chainScalarWhereInput = {
    AND?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
    OR?: supply_chainScalarWhereInput[];
    NOT?: supply_chainScalarWhereInput | supply_chainScalarWhereInput[];
    id?: UuidFilter<'supply_chain'> | string;
    product_id?: UuidFilter<'supply_chain'> | string;
    supplier?: StringNullableFilter<'supply_chain'> | string | null;
    quantity_supplied?: IntNullableFilter<'supply_chain'> | number | null;
    supply_date?: DateTimeNullableFilter<'supply_chain'> | Date | string | null;
    supply_chain_manager_id?: UuidFilter<'supply_chain'> | string;
    organization_id?: UuidFilter<'supply_chain'> | string;
    created_at?: DateTimeFilter<'supply_chain'> | Date | string;
    updated_at?: DateTimeFilter<'supply_chain'> | Date | string;
  };

  export type customerCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutOrganizationInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutOrganizationInput, customerUncheckedCreateWithoutOrganizationInput>;
  };

  export type customerCreateManyOrganizationInputEnvelope = {
    data: customerCreateManyOrganizationInput | customerCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryCreateWithoutOrganizationInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: salesCreateNestedManyWithoutInventoryInput;
    supply_chain?: supply_chainCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: salesUncheckedCreateNestedManyWithoutInventoryInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryCreateOrConnectWithoutOrganizationInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>;
  };

  export type inventoryCreateManyOrganizationInputEnvelope = {
    data: inventoryCreateManyOrganizationInput | inventoryCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type salesCreateWithoutOrganizationInput = {
    id?: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory: inventoryCreateNestedOneWithoutSalesInput;
    user: userCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    product_id: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    sales_representative_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateOrConnectWithoutOrganizationInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutOrganizationInput, salesUncheckedCreateWithoutOrganizationInput>;
  };

  export type salesCreateManyOrganizationInputEnvelope = {
    data: salesCreateManyOrganizationInput | salesCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type supply_chainCreateWithoutOrganizationInput = {
    id?: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory: inventoryCreateNestedOneWithoutSupply_chainInput;
    user: userCreateNestedOneWithoutSupply_chainInput;
  };

  export type supply_chainUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    product_id: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    supply_chain_manager_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainCreateOrConnectWithoutOrganizationInput = {
    where: supply_chainWhereUniqueInput;
    create: XOR<supply_chainCreateWithoutOrganizationInput, supply_chainUncheckedCreateWithoutOrganizationInput>;
  };

  export type supply_chainCreateManyOrganizationInputEnvelope = {
    data: supply_chainCreateManyOrganizationInput | supply_chainCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type customerUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutOrganizationInput, customerUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<customerCreateWithoutOrganizationInput, customerUncheckedCreateWithoutOrganizationInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutOrganizationInput, customerUncheckedUpdateWithoutOrganizationInput>;
  };

  export type customerUpdateManyWithWhereWithoutOrganizationInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    name?: StringFilter<'customer'> | string;
    address?: StringNullableFilter<'customer'> | string | null;
    phone_number?: StringNullableFilter<'customer'> | string | null;
    email?: StringNullableFilter<'customer'> | string | null;
    organization_id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type inventoryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutOrganizationInput, inventoryUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutOrganizationInput, inventoryUncheckedUpdateWithoutOrganizationInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutOrganizationInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    OR?: inventoryScalarWhereInput[];
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    product_name?: StringFilter<'inventory'> | string;
    product_description?: StringNullableFilter<'inventory'> | string | null;
    quantity?: IntNullableFilter<'inventory'> | number | null;
    price?: IntNullableFilter<'inventory'> | number | null;
    supplier?: StringNullableFilter<'inventory'> | string | null;
    organization_id?: UuidFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type salesUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutOrganizationInput, salesUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<salesCreateWithoutOrganizationInput, salesUncheckedCreateWithoutOrganizationInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutOrganizationInput, salesUncheckedUpdateWithoutOrganizationInput>;
  };

  export type salesUpdateManyWithWhereWithoutOrganizationInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type supply_chainUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: supply_chainWhereUniqueInput;
    update: XOR<supply_chainUpdateWithoutOrganizationInput, supply_chainUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<supply_chainCreateWithoutOrganizationInput, supply_chainUncheckedCreateWithoutOrganizationInput>;
  };

  export type supply_chainUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: supply_chainWhereUniqueInput;
    data: XOR<supply_chainUpdateWithoutOrganizationInput, supply_chainUncheckedUpdateWithoutOrganizationInput>;
  };

  export type supply_chainUpdateManyWithWhereWithoutOrganizationInput = {
    where: supply_chainScalarWhereInput;
    data: XOR<supply_chainUpdateManyMutationInput, supply_chainUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type organizationCreateWithoutSalesInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer?: customerCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    supply_chain?: supply_chainCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutSalesInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer?: customerUncheckedCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutSalesInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutSalesInput, organizationUncheckedCreateWithoutSalesInput>;
  };

  export type inventoryCreateWithoutSalesInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInventoryInput;
    supply_chain?: supply_chainCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutSalesInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryCreateOrConnectWithoutSalesInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>;
  };

  export type userCreateWithoutSalesInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSalesInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSalesInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
  };

  export type organizationUpsertWithoutSalesInput = {
    update: XOR<organizationUpdateWithoutSalesInput, organizationUncheckedUpdateWithoutSalesInput>;
    create: XOR<organizationCreateWithoutSalesInput, organizationUncheckedCreateWithoutSalesInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutSalesInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutSalesInput, organizationUncheckedUpdateWithoutSalesInput>;
  };

  export type organizationUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUncheckedUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type inventoryUpsertWithoutSalesInput = {
    update: XOR<inventoryUpdateWithoutSalesInput, inventoryUncheckedUpdateWithoutSalesInput>;
    create: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>;
    where?: inventoryWhereInput;
  };

  export type inventoryUpdateToOneWithWhereWithoutSalesInput = {
    where?: inventoryWhereInput;
    data: XOR<inventoryUpdateWithoutSalesInput, inventoryUncheckedUpdateWithoutSalesInput>;
  };

  export type inventoryUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInventoryNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutInventoryNestedInput;
  };

  export type userUpsertWithoutSalesInput = {
    update: XOR<userUpdateWithoutSalesInput, userUncheckedUpdateWithoutSalesInput>;
    create: XOR<userCreateWithoutSalesInput, userUncheckedCreateWithoutSalesInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSalesInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSalesInput, userUncheckedUpdateWithoutSalesInput>;
  };

  export type userUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type organizationCreateWithoutSupply_chainInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer?: customerCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    sales?: salesCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutSupply_chainInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer?: customerUncheckedCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    sales?: salesUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutSupply_chainInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutSupply_chainInput, organizationUncheckedCreateWithoutSupply_chainInput>;
  };

  export type inventoryCreateWithoutSupply_chainInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInventoryInput;
    sales?: salesCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutSupply_chainInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: salesUncheckedCreateNestedManyWithoutInventoryInput;
  };

  export type inventoryCreateOrConnectWithoutSupply_chainInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutSupply_chainInput, inventoryUncheckedCreateWithoutSupply_chainInput>;
  };

  export type userCreateWithoutSupply_chainInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    sales?: salesCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSupply_chainInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    sales?: salesUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSupply_chainInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSupply_chainInput, userUncheckedCreateWithoutSupply_chainInput>;
  };

  export type organizationUpsertWithoutSupply_chainInput = {
    update: XOR<organizationUpdateWithoutSupply_chainInput, organizationUncheckedUpdateWithoutSupply_chainInput>;
    create: XOR<organizationCreateWithoutSupply_chainInput, organizationUncheckedCreateWithoutSupply_chainInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutSupply_chainInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutSupply_chainInput, organizationUncheckedUpdateWithoutSupply_chainInput>;
  };

  export type organizationUpdateWithoutSupply_chainInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    sales?: salesUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutSupply_chainInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUncheckedUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    sales?: salesUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type inventoryUpsertWithoutSupply_chainInput = {
    update: XOR<inventoryUpdateWithoutSupply_chainInput, inventoryUncheckedUpdateWithoutSupply_chainInput>;
    create: XOR<inventoryCreateWithoutSupply_chainInput, inventoryUncheckedCreateWithoutSupply_chainInput>;
    where?: inventoryWhereInput;
  };

  export type inventoryUpdateToOneWithWhereWithoutSupply_chainInput = {
    where?: inventoryWhereInput;
    data: XOR<inventoryUpdateWithoutSupply_chainInput, inventoryUncheckedUpdateWithoutSupply_chainInput>;
  };

  export type inventoryUpdateWithoutSupply_chainInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInventoryNestedInput;
    sales?: salesUpdateManyWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutSupply_chainInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: salesUncheckedUpdateManyWithoutInventoryNestedInput;
  };

  export type userUpsertWithoutSupply_chainInput = {
    update: XOR<userUpdateWithoutSupply_chainInput, userUncheckedUpdateWithoutSupply_chainInput>;
    create: XOR<userCreateWithoutSupply_chainInput, userUncheckedCreateWithoutSupply_chainInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSupply_chainInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSupply_chainInput, userUncheckedUpdateWithoutSupply_chainInput>;
  };

  export type userUpdateWithoutSupply_chainInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    sales?: salesUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSupply_chainInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer?: customerCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    sales?: salesCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer?: customerUncheckedCreateNestedManyWithoutOrganizationInput;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    sales?: salesUncheckedCreateNestedManyWithoutOrganizationInput;
    supply_chain?: supply_chainUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type salesCreateWithoutUserInput = {
    id?: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSalesInput;
    inventory: inventoryCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutUserInput = {
    id?: string;
    product_id: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateOrConnectWithoutUserInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>;
  };

  export type salesCreateManyUserInputEnvelope = {
    data: salesCreateManyUserInput | salesCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type supply_chainCreateWithoutUserInput = {
    id?: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSupply_chainInput;
    inventory: inventoryCreateNestedOneWithoutSupply_chainInput;
  };

  export type supply_chainUncheckedCreateWithoutUserInput = {
    id?: string;
    product_id: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainCreateOrConnectWithoutUserInput = {
    where: supply_chainWhereUniqueInput;
    create: XOR<supply_chainCreateWithoutUserInput, supply_chainUncheckedCreateWithoutUserInput>;
  };

  export type supply_chainCreateManyUserInputEnvelope = {
    data: supply_chainCreateManyUserInput | supply_chainCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    location?: StringNullableFilter<'organization'> | string | null;
    established_date?: DateTimeNullableFilter<'organization'> | Date | string | null;
    industry?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type salesUpsertWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>;
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>;
  };

  export type salesUpdateManyWithWhereWithoutUserInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutUserInput>;
  };

  export type supply_chainUpsertWithWhereUniqueWithoutUserInput = {
    where: supply_chainWhereUniqueInput;
    update: XOR<supply_chainUpdateWithoutUserInput, supply_chainUncheckedUpdateWithoutUserInput>;
    create: XOR<supply_chainCreateWithoutUserInput, supply_chainUncheckedCreateWithoutUserInput>;
  };

  export type supply_chainUpdateWithWhereUniqueWithoutUserInput = {
    where: supply_chainWhereUniqueInput;
    data: XOR<supply_chainUpdateWithoutUserInput, supply_chainUncheckedUpdateWithoutUserInput>;
  };

  export type supply_chainUpdateManyWithWhereWithoutUserInput = {
    where: supply_chainScalarWhereInput;
    data: XOR<supply_chainUpdateManyMutationInput, supply_chainUncheckedUpdateManyWithoutUserInput>;
  };

  export type salesCreateManyInventoryInput = {
    id?: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    sales_representative_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainCreateManyInventoryInput = {
    id?: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    supply_chain_manager_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSalesNestedInput;
    user?: userUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sales_representative_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sales_representative_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSupply_chainNestedInput;
    user?: userUpdateOneRequiredWithoutSupply_chainNestedInput;
  };

  export type supply_chainUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supply_chain_manager_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supply_chain_manager_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyOrganizationInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateManyOrganizationInput = {
    id?: string;
    product_name: string;
    product_description?: string | null;
    quantity?: number | null;
    price?: number | null;
    supplier?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateManyOrganizationInput = {
    id?: string;
    product_id: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    sales_representative_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainCreateManyOrganizationInput = {
    id?: string;
    product_id: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    supply_chain_manager_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: salesUpdateManyWithoutInventoryNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: salesUncheckedUpdateManyWithoutInventoryNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_name?: StringFieldUpdateOperationsInput | string;
    product_description?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateOneRequiredWithoutSalesNestedInput;
    user?: userUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sales_representative_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    sales_representative_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateOneRequiredWithoutSupply_chainNestedInput;
    user?: userUpdateOneRequiredWithoutSupply_chainNestedInput;
  };

  export type supply_chainUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supply_chain_manager_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supply_chain_manager_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    email?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type salesCreateManyUserInput = {
    id?: string;
    product_id: string;
    quantity_sold?: number | null;
    sale_date?: Date | string | null;
    customer_name?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chainCreateManyUserInput = {
    id?: string;
    product_id: string;
    supplier?: string | null;
    quantity_supplied?: number | null;
    supply_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    sales?: salesUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUncheckedUpdateManyWithoutOrganizationNestedInput;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    sales?: salesUncheckedUpdateManyWithoutOrganizationNestedInput;
    supply_chain?: supply_chainUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type salesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSalesNestedInput;
    inventory?: inventoryUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity_sold?: NullableIntFieldUpdateOperationsInput | number | null;
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSupply_chainNestedInput;
    inventory?: inventoryUpdateOneRequiredWithoutSupply_chainNestedInput;
  };

  export type supply_chainUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chainUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    supplier?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity_supplied?: NullableIntFieldUpdateOperationsInput | number | null;
    supply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use InventoryCountOutputTypeDefaultArgs instead
   */
  export type InventoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    InventoryCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use inventoryDefaultArgs instead
   */
  export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    inventoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use salesDefaultArgs instead
   */
  export type salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = salesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use supply_chainDefaultArgs instead
   */
  export type supply_chainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    supply_chainDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
