
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Restaurante
 * 
 */
export type Restaurante = $Result.DefaultSelection<Prisma.$RestaurantePayload>
/**
 * Model Turno
 * 
 */
export type Turno = $Result.DefaultSelection<Prisma.$TurnoPayload>
/**
 * Model Promocion
 * 
 */
export type Promocion = $Result.DefaultSelection<Prisma.$PromocionPayload>
/**
 * Model ReservaMesa
 * 
 */
export type ReservaMesa = $Result.DefaultSelection<Prisma.$ReservaMesaPayload>
/**
 * Model ResenaMesa
 * 
 */
export type ResenaMesa = $Result.DefaultSelection<Prisma.$ResenaMesaPayload>
/**
 * Model BolsaSorpresaPlantilla
 * 
 */
export type BolsaSorpresaPlantilla = $Result.DefaultSelection<Prisma.$BolsaSorpresaPlantillaPayload>
/**
 * Model PublicacionBolsa
 * 
 */
export type PublicacionBolsa = $Result.DefaultSelection<Prisma.$PublicacionBolsaPayload>
/**
 * Model ReservaBolsa
 * 
 */
export type ReservaBolsa = $Result.DefaultSelection<Prisma.$ReservaBolsaPayload>
/**
 * Model ResenaBolsa
 * 
 */
export type ResenaBolsa = $Result.DefaultSelection<Prisma.$ResenaBolsaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  CLIENTE: 'CLIENTE',
  RESTAURANTE: 'RESTAURANTE',
  ADMIN: 'ADMIN'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const EstadoRestaurante: {
  ACTIVO: 'ACTIVO',
  PAUSADO: 'PAUSADO',
  PENDIENTE: 'PENDIENTE'
};

export type EstadoRestaurante = (typeof EstadoRestaurante)[keyof typeof EstadoRestaurante]


export const TipoPromo: {
  PORCENTAJE: 'PORCENTAJE',
  IMPORTE_FIJO: 'IMPORTE_FIJO',
  MENU_ESPECIAL: 'MENU_ESPECIAL'
};

export type TipoPromo = (typeof TipoPromo)[keyof typeof TipoPromo]


export const EstadoPromo: {
  ACTIVA: 'ACTIVA',
  PAUSADA: 'PAUSADA',
  EXPIRADA: 'EXPIRADA'
};

export type EstadoPromo = (typeof EstadoPromo)[keyof typeof EstadoPromo]


export const EstadoReserva: {
  CONFIRMADA: 'CONFIRMADA',
  MODIFICADA: 'MODIFICADA',
  CANCELADA: 'CANCELADA',
  COMPLETADA: 'COMPLETADA',
  NO_SHOW: 'NO_SHOW'
};

export type EstadoReserva = (typeof EstadoReserva)[keyof typeof EstadoReserva]


export const EstadoPublicacion: {
  ACTIVA: 'ACTIVA',
  FINALIZADA: 'FINALIZADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoPublicacion = (typeof EstadoPublicacion)[keyof typeof EstadoPublicacion]


export const EstadoBolsa: {
  PENDIENTE: 'PENDIENTE',
  ENTREGADA: 'ENTREGADA',
  NO_RECOGIDA: 'NO_RECOGIDA',
  CANCELADA: 'CANCELADA'
};

export type EstadoBolsa = (typeof EstadoBolsa)[keyof typeof EstadoBolsa]


export const MetodoPago: {
  PREPAGO: 'PREPAGO',
  PAGO_EN_LOCAL: 'PAGO_EN_LOCAL'
};

export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type EstadoRestaurante = $Enums.EstadoRestaurante

export const EstadoRestaurante: typeof $Enums.EstadoRestaurante

export type TipoPromo = $Enums.TipoPromo

export const TipoPromo: typeof $Enums.TipoPromo

export type EstadoPromo = $Enums.EstadoPromo

export const EstadoPromo: typeof $Enums.EstadoPromo

export type EstadoReserva = $Enums.EstadoReserva

export const EstadoReserva: typeof $Enums.EstadoReserva

export type EstadoPublicacion = $Enums.EstadoPublicacion

export const EstadoPublicacion: typeof $Enums.EstadoPublicacion

export type EstadoBolsa = $Enums.EstadoBolsa

export const EstadoBolsa: typeof $Enums.EstadoBolsa

export type MetodoPago = $Enums.MetodoPago

export const MetodoPago: typeof $Enums.MetodoPago

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.restaurante`: Exposes CRUD operations for the **Restaurante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurantes
    * const restaurantes = await prisma.restaurante.findMany()
    * ```
    */
  get restaurante(): Prisma.RestauranteDelegate<ExtArgs>;

  /**
   * `prisma.turno`: Exposes CRUD operations for the **Turno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turno.findMany()
    * ```
    */
  get turno(): Prisma.TurnoDelegate<ExtArgs>;

  /**
   * `prisma.promocion`: Exposes CRUD operations for the **Promocion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promocions
    * const promocions = await prisma.promocion.findMany()
    * ```
    */
  get promocion(): Prisma.PromocionDelegate<ExtArgs>;

  /**
   * `prisma.reservaMesa`: Exposes CRUD operations for the **ReservaMesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservaMesas
    * const reservaMesas = await prisma.reservaMesa.findMany()
    * ```
    */
  get reservaMesa(): Prisma.ReservaMesaDelegate<ExtArgs>;

  /**
   * `prisma.resenaMesa`: Exposes CRUD operations for the **ResenaMesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResenaMesas
    * const resenaMesas = await prisma.resenaMesa.findMany()
    * ```
    */
  get resenaMesa(): Prisma.ResenaMesaDelegate<ExtArgs>;

  /**
   * `prisma.bolsaSorpresaPlantilla`: Exposes CRUD operations for the **BolsaSorpresaPlantilla** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BolsaSorpresaPlantillas
    * const bolsaSorpresaPlantillas = await prisma.bolsaSorpresaPlantilla.findMany()
    * ```
    */
  get bolsaSorpresaPlantilla(): Prisma.BolsaSorpresaPlantillaDelegate<ExtArgs>;

  /**
   * `prisma.publicacionBolsa`: Exposes CRUD operations for the **PublicacionBolsa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicacionBolsas
    * const publicacionBolsas = await prisma.publicacionBolsa.findMany()
    * ```
    */
  get publicacionBolsa(): Prisma.PublicacionBolsaDelegate<ExtArgs>;

  /**
   * `prisma.reservaBolsa`: Exposes CRUD operations for the **ReservaBolsa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservaBolsas
    * const reservaBolsas = await prisma.reservaBolsa.findMany()
    * ```
    */
  get reservaBolsa(): Prisma.ReservaBolsaDelegate<ExtArgs>;

  /**
   * `prisma.resenaBolsa`: Exposes CRUD operations for the **ResenaBolsa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResenaBolsas
    * const resenaBolsas = await prisma.resenaBolsa.findMany()
    * ```
    */
  get resenaBolsa(): Prisma.ResenaBolsaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Restaurante: 'Restaurante',
    Turno: 'Turno',
    Promocion: 'Promocion',
    ReservaMesa: 'ReservaMesa',
    ResenaMesa: 'ResenaMesa',
    BolsaSorpresaPlantilla: 'BolsaSorpresaPlantilla',
    PublicacionBolsa: 'PublicacionBolsa',
    ReservaBolsa: 'ReservaBolsa',
    ResenaBolsa: 'ResenaBolsa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "restaurante" | "turno" | "promocion" | "reservaMesa" | "resenaMesa" | "bolsaSorpresaPlantilla" | "publicacionBolsa" | "reservaBolsa" | "resenaBolsa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Restaurante: {
        payload: Prisma.$RestaurantePayload<ExtArgs>
        fields: Prisma.RestauranteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestauranteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestauranteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          findFirst: {
            args: Prisma.RestauranteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestauranteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          findMany: {
            args: Prisma.RestauranteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          create: {
            args: Prisma.RestauranteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          createMany: {
            args: Prisma.RestauranteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestauranteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          delete: {
            args: Prisma.RestauranteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          update: {
            args: Prisma.RestauranteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          deleteMany: {
            args: Prisma.RestauranteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestauranteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestauranteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          aggregate: {
            args: Prisma.RestauranteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurante>
          }
          groupBy: {
            args: Prisma.RestauranteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestauranteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestauranteCountArgs<ExtArgs>
            result: $Utils.Optional<RestauranteCountAggregateOutputType> | number
          }
        }
      }
      Turno: {
        payload: Prisma.$TurnoPayload<ExtArgs>
        fields: Prisma.TurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findFirst: {
            args: Prisma.TurnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findMany: {
            args: Prisma.TurnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          create: {
            args: Prisma.TurnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          createMany: {
            args: Prisma.TurnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          delete: {
            args: Prisma.TurnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          update: {
            args: Prisma.TurnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          deleteMany: {
            args: Prisma.TurnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          aggregate: {
            args: Prisma.TurnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurno>
          }
          groupBy: {
            args: Prisma.TurnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnoCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoCountAggregateOutputType> | number
          }
        }
      }
      Promocion: {
        payload: Prisma.$PromocionPayload<ExtArgs>
        fields: Prisma.PromocionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromocionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromocionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          findFirst: {
            args: Prisma.PromocionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromocionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          findMany: {
            args: Prisma.PromocionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>[]
          }
          create: {
            args: Prisma.PromocionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          createMany: {
            args: Prisma.PromocionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromocionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>[]
          }
          delete: {
            args: Prisma.PromocionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          update: {
            args: Prisma.PromocionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          deleteMany: {
            args: Prisma.PromocionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromocionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromocionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocionPayload>
          }
          aggregate: {
            args: Prisma.PromocionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromocion>
          }
          groupBy: {
            args: Prisma.PromocionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromocionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromocionCountArgs<ExtArgs>
            result: $Utils.Optional<PromocionCountAggregateOutputType> | number
          }
        }
      }
      ReservaMesa: {
        payload: Prisma.$ReservaMesaPayload<ExtArgs>
        fields: Prisma.ReservaMesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaMesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaMesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>
          }
          findFirst: {
            args: Prisma.ReservaMesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaMesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>
          }
          findMany: {
            args: Prisma.ReservaMesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>[]
          }
          create: {
            args: Prisma.ReservaMesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>
          }
          createMany: {
            args: Prisma.ReservaMesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaMesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>[]
          }
          delete: {
            args: Prisma.ReservaMesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>
          }
          update: {
            args: Prisma.ReservaMesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaMesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaMesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservaMesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaMesaPayload>
          }
          aggregate: {
            args: Prisma.ReservaMesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservaMesa>
          }
          groupBy: {
            args: Prisma.ReservaMesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaMesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaMesaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaMesaCountAggregateOutputType> | number
          }
        }
      }
      ResenaMesa: {
        payload: Prisma.$ResenaMesaPayload<ExtArgs>
        fields: Prisma.ResenaMesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResenaMesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResenaMesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>
          }
          findFirst: {
            args: Prisma.ResenaMesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResenaMesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>
          }
          findMany: {
            args: Prisma.ResenaMesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>[]
          }
          create: {
            args: Prisma.ResenaMesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>
          }
          createMany: {
            args: Prisma.ResenaMesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResenaMesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>[]
          }
          delete: {
            args: Prisma.ResenaMesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>
          }
          update: {
            args: Prisma.ResenaMesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>
          }
          deleteMany: {
            args: Prisma.ResenaMesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResenaMesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResenaMesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaMesaPayload>
          }
          aggregate: {
            args: Prisma.ResenaMesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResenaMesa>
          }
          groupBy: {
            args: Prisma.ResenaMesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResenaMesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResenaMesaCountArgs<ExtArgs>
            result: $Utils.Optional<ResenaMesaCountAggregateOutputType> | number
          }
        }
      }
      BolsaSorpresaPlantilla: {
        payload: Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>
        fields: Prisma.BolsaSorpresaPlantillaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BolsaSorpresaPlantillaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BolsaSorpresaPlantillaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>
          }
          findFirst: {
            args: Prisma.BolsaSorpresaPlantillaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BolsaSorpresaPlantillaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>
          }
          findMany: {
            args: Prisma.BolsaSorpresaPlantillaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>[]
          }
          create: {
            args: Prisma.BolsaSorpresaPlantillaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>
          }
          createMany: {
            args: Prisma.BolsaSorpresaPlantillaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BolsaSorpresaPlantillaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>[]
          }
          delete: {
            args: Prisma.BolsaSorpresaPlantillaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>
          }
          update: {
            args: Prisma.BolsaSorpresaPlantillaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>
          }
          deleteMany: {
            args: Prisma.BolsaSorpresaPlantillaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BolsaSorpresaPlantillaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BolsaSorpresaPlantillaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BolsaSorpresaPlantillaPayload>
          }
          aggregate: {
            args: Prisma.BolsaSorpresaPlantillaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBolsaSorpresaPlantilla>
          }
          groupBy: {
            args: Prisma.BolsaSorpresaPlantillaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BolsaSorpresaPlantillaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BolsaSorpresaPlantillaCountArgs<ExtArgs>
            result: $Utils.Optional<BolsaSorpresaPlantillaCountAggregateOutputType> | number
          }
        }
      }
      PublicacionBolsa: {
        payload: Prisma.$PublicacionBolsaPayload<ExtArgs>
        fields: Prisma.PublicacionBolsaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacionBolsaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacionBolsaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>
          }
          findFirst: {
            args: Prisma.PublicacionBolsaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacionBolsaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>
          }
          findMany: {
            args: Prisma.PublicacionBolsaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>[]
          }
          create: {
            args: Prisma.PublicacionBolsaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>
          }
          createMany: {
            args: Prisma.PublicacionBolsaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacionBolsaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>[]
          }
          delete: {
            args: Prisma.PublicacionBolsaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>
          }
          update: {
            args: Prisma.PublicacionBolsaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>
          }
          deleteMany: {
            args: Prisma.PublicacionBolsaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacionBolsaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublicacionBolsaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionBolsaPayload>
          }
          aggregate: {
            args: Prisma.PublicacionBolsaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicacionBolsa>
          }
          groupBy: {
            args: Prisma.PublicacionBolsaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacionBolsaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacionBolsaCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacionBolsaCountAggregateOutputType> | number
          }
        }
      }
      ReservaBolsa: {
        payload: Prisma.$ReservaBolsaPayload<ExtArgs>
        fields: Prisma.ReservaBolsaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaBolsaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaBolsaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>
          }
          findFirst: {
            args: Prisma.ReservaBolsaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaBolsaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>
          }
          findMany: {
            args: Prisma.ReservaBolsaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>[]
          }
          create: {
            args: Prisma.ReservaBolsaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>
          }
          createMany: {
            args: Prisma.ReservaBolsaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaBolsaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>[]
          }
          delete: {
            args: Prisma.ReservaBolsaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>
          }
          update: {
            args: Prisma.ReservaBolsaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaBolsaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaBolsaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservaBolsaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaBolsaPayload>
          }
          aggregate: {
            args: Prisma.ReservaBolsaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservaBolsa>
          }
          groupBy: {
            args: Prisma.ReservaBolsaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaBolsaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaBolsaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaBolsaCountAggregateOutputType> | number
          }
        }
      }
      ResenaBolsa: {
        payload: Prisma.$ResenaBolsaPayload<ExtArgs>
        fields: Prisma.ResenaBolsaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResenaBolsaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResenaBolsaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>
          }
          findFirst: {
            args: Prisma.ResenaBolsaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResenaBolsaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>
          }
          findMany: {
            args: Prisma.ResenaBolsaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>[]
          }
          create: {
            args: Prisma.ResenaBolsaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>
          }
          createMany: {
            args: Prisma.ResenaBolsaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResenaBolsaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>[]
          }
          delete: {
            args: Prisma.ResenaBolsaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>
          }
          update: {
            args: Prisma.ResenaBolsaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>
          }
          deleteMany: {
            args: Prisma.ResenaBolsaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResenaBolsaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResenaBolsaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenaBolsaPayload>
          }
          aggregate: {
            args: Prisma.ResenaBolsaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResenaBolsa>
          }
          groupBy: {
            args: Prisma.ResenaBolsaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResenaBolsaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResenaBolsaCountArgs<ExtArgs>
            result: $Utils.Optional<ResenaBolsaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservasMesa: number
    reservasBolsa: number
    resenasMesa: number
    resenasBolsa: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasMesa?: boolean | UsuarioCountOutputTypeCountReservasMesaArgs
    reservasBolsa?: boolean | UsuarioCountOutputTypeCountReservasBolsaArgs
    resenasMesa?: boolean | UsuarioCountOutputTypeCountResenasMesaArgs
    resenasBolsa?: boolean | UsuarioCountOutputTypeCountResenasBolsaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaMesaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaBolsaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountResenasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaMesaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountResenasBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaBolsaWhereInput
  }


  /**
   * Count Type RestauranteCountOutputType
   */

  export type RestauranteCountOutputType = {
    turnos: number
    promos: number
    reservasMesa: number
    plantillasBolsa: number
    publicaciones: number
  }

  export type RestauranteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | RestauranteCountOutputTypeCountTurnosArgs
    promos?: boolean | RestauranteCountOutputTypeCountPromosArgs
    reservasMesa?: boolean | RestauranteCountOutputTypeCountReservasMesaArgs
    plantillasBolsa?: boolean | RestauranteCountOutputTypeCountPlantillasBolsaArgs
    publicaciones?: boolean | RestauranteCountOutputTypeCountPublicacionesArgs
  }

  // Custom InputTypes
  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCountOutputType
     */
    select?: RestauranteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountPromosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocionWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountReservasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaMesaWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountPlantillasBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BolsaSorpresaPlantillaWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionBolsaWhereInput
  }


  /**
   * Count Type PromocionCountOutputType
   */

  export type PromocionCountOutputType = {
    reservasMesa: number
  }

  export type PromocionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasMesa?: boolean | PromocionCountOutputTypeCountReservasMesaArgs
  }

  // Custom InputTypes
  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromocionCountOutputType
     */
    select?: PromocionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromocionCountOutputType without action
   */
  export type PromocionCountOutputTypeCountReservasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaMesaWhereInput
  }


  /**
   * Count Type BolsaSorpresaPlantillaCountOutputType
   */

  export type BolsaSorpresaPlantillaCountOutputType = {
    publicaciones: number
  }

  export type BolsaSorpresaPlantillaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | BolsaSorpresaPlantillaCountOutputTypeCountPublicacionesArgs
  }

  // Custom InputTypes
  /**
   * BolsaSorpresaPlantillaCountOutputType without action
   */
  export type BolsaSorpresaPlantillaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantillaCountOutputType
     */
    select?: BolsaSorpresaPlantillaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BolsaSorpresaPlantillaCountOutputType without action
   */
  export type BolsaSorpresaPlantillaCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionBolsaWhereInput
  }


  /**
   * Count Type PublicacionBolsaCountOutputType
   */

  export type PublicacionBolsaCountOutputType = {
    reservas: number
  }

  export type PublicacionBolsaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | PublicacionBolsaCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * PublicacionBolsaCountOutputType without action
   */
  export type PublicacionBolsaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsaCountOutputType
     */
    select?: PublicacionBolsaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicacionBolsaCountOutputType without action
   */
  export type PublicacionBolsaCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaBolsaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    puntos: number | null
    noShowCount: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    puntos: number | null
    noShowCount: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    nombre: string | null
    telefono: string | null
    rol: $Enums.Rol | null
    idioma: string | null
    moneda: string | null
    puntos: number | null
    noShowCount: number | null
    altoRiesgo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    nombre: string | null
    telefono: string | null
    rol: $Enums.Rol | null
    idioma: string | null
    moneda: string | null
    puntos: number | null
    noShowCount: number | null
    altoRiesgo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    nombre: number
    telefono: number
    rol: number
    idioma: number
    moneda: number
    dietaPreferencia: number
    puntos: number
    noShowCount: number
    altoRiesgo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    puntos?: true
    noShowCount?: true
  }

  export type UsuarioSumAggregateInputType = {
    puntos?: true
    noShowCount?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nombre?: true
    telefono?: true
    rol?: true
    idioma?: true
    moneda?: true
    puntos?: true
    noShowCount?: true
    altoRiesgo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nombre?: true
    telefono?: true
    rol?: true
    idioma?: true
    moneda?: true
    puntos?: true
    noShowCount?: true
    altoRiesgo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nombre?: true
    telefono?: true
    rol?: true
    idioma?: true
    moneda?: true
    dietaPreferencia?: true
    puntos?: true
    noShowCount?: true
    altoRiesgo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    nombre: string
    telefono: string | null
    rol: $Enums.Rol
    idioma: string
    moneda: string
    dietaPreferencia: string[]
    puntos: number
    noShowCount: number
    altoRiesgo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    telefono?: boolean
    rol?: boolean
    idioma?: boolean
    moneda?: boolean
    dietaPreferencia?: boolean
    puntos?: boolean
    noShowCount?: boolean
    altoRiesgo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    reservasMesa?: boolean | Usuario$reservasMesaArgs<ExtArgs>
    reservasBolsa?: boolean | Usuario$reservasBolsaArgs<ExtArgs>
    resenasMesa?: boolean | Usuario$resenasMesaArgs<ExtArgs>
    resenasBolsa?: boolean | Usuario$resenasBolsaArgs<ExtArgs>
    restaurante?: boolean | Usuario$restauranteArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    telefono?: boolean
    rol?: boolean
    idioma?: boolean
    moneda?: boolean
    dietaPreferencia?: boolean
    puntos?: boolean
    noShowCount?: boolean
    altoRiesgo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    telefono?: boolean
    rol?: boolean
    idioma?: boolean
    moneda?: boolean
    dietaPreferencia?: boolean
    puntos?: boolean
    noShowCount?: boolean
    altoRiesgo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasMesa?: boolean | Usuario$reservasMesaArgs<ExtArgs>
    reservasBolsa?: boolean | Usuario$reservasBolsaArgs<ExtArgs>
    resenasMesa?: boolean | Usuario$resenasMesaArgs<ExtArgs>
    resenasBolsa?: boolean | Usuario$resenasBolsaArgs<ExtArgs>
    restaurante?: boolean | Usuario$restauranteArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reservasMesa: Prisma.$ReservaMesaPayload<ExtArgs>[]
      reservasBolsa: Prisma.$ReservaBolsaPayload<ExtArgs>[]
      resenasMesa: Prisma.$ResenaMesaPayload<ExtArgs>[]
      resenasBolsa: Prisma.$ResenaBolsaPayload<ExtArgs>[]
      restaurante: Prisma.$RestaurantePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      nombre: string
      telefono: string | null
      rol: $Enums.Rol
      idioma: string
      moneda: string
      dietaPreferencia: string[]
      puntos: number
      noShowCount: number
      altoRiesgo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservasMesa<T extends Usuario$reservasMesaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasMesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findMany"> | Null>
    reservasBolsa<T extends Usuario$reservasBolsaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasBolsaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findMany"> | Null>
    resenasMesa<T extends Usuario$resenasMesaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$resenasMesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findMany"> | Null>
    resenasBolsa<T extends Usuario$resenasBolsaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$resenasBolsaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findMany"> | Null>
    restaurante<T extends Usuario$restauranteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$restauranteArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly idioma: FieldRef<"Usuario", 'String'>
    readonly moneda: FieldRef<"Usuario", 'String'>
    readonly dietaPreferencia: FieldRef<"Usuario", 'String[]'>
    readonly puntos: FieldRef<"Usuario", 'Int'>
    readonly noShowCount: FieldRef<"Usuario", 'Int'>
    readonly altoRiesgo: FieldRef<"Usuario", 'Boolean'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.reservasMesa
   */
  export type Usuario$reservasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    where?: ReservaMesaWhereInput
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    cursor?: ReservaMesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaMesaScalarFieldEnum | ReservaMesaScalarFieldEnum[]
  }

  /**
   * Usuario.reservasBolsa
   */
  export type Usuario$reservasBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    where?: ReservaBolsaWhereInput
    orderBy?: ReservaBolsaOrderByWithRelationInput | ReservaBolsaOrderByWithRelationInput[]
    cursor?: ReservaBolsaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaBolsaScalarFieldEnum | ReservaBolsaScalarFieldEnum[]
  }

  /**
   * Usuario.resenasMesa
   */
  export type Usuario$resenasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    where?: ResenaMesaWhereInput
    orderBy?: ResenaMesaOrderByWithRelationInput | ResenaMesaOrderByWithRelationInput[]
    cursor?: ResenaMesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaMesaScalarFieldEnum | ResenaMesaScalarFieldEnum[]
  }

  /**
   * Usuario.resenasBolsa
   */
  export type Usuario$resenasBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    where?: ResenaBolsaWhereInput
    orderBy?: ResenaBolsaOrderByWithRelationInput | ResenaBolsaOrderByWithRelationInput[]
    cursor?: ResenaBolsaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenaBolsaScalarFieldEnum | ResenaBolsaScalarFieldEnum[]
  }

  /**
   * Usuario.restaurante
   */
  export type Usuario$restauranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    where?: RestauranteWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Restaurante
   */

  export type AggregateRestaurante = {
    _count: RestauranteCountAggregateOutputType | null
    _avg: RestauranteAvgAggregateOutputType | null
    _sum: RestauranteSumAggregateOutputType | null
    _min: RestauranteMinAggregateOutputType | null
    _max: RestauranteMaxAggregateOutputType | null
  }

  export type RestauranteAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    precioMedio: number | null
    capacidadTotal: number | null
  }

  export type RestauranteSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    precioMedio: number | null
    capacidadTotal: number | null
  }

  export type RestauranteMinAggregateOutputType = {
    id: string | null
    managerId: string | null
    nombre: string | null
    descripcion: string | null
    direccion: string | null
    ciudad: string | null
    barrio: string | null
    lat: number | null
    lng: number | null
    telefono: string | null
    email: string | null
    sitioWeb: string | null
    precioMedio: number | null
    capacidadTotal: number | null
    estado: $Enums.EstadoRestaurante | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type RestauranteMaxAggregateOutputType = {
    id: string | null
    managerId: string | null
    nombre: string | null
    descripcion: string | null
    direccion: string | null
    ciudad: string | null
    barrio: string | null
    lat: number | null
    lng: number | null
    telefono: string | null
    email: string | null
    sitioWeb: string | null
    precioMedio: number | null
    capacidadTotal: number | null
    estado: $Enums.EstadoRestaurante | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type RestauranteCountAggregateOutputType = {
    id: number
    managerId: number
    nombre: number
    descripcion: number
    direccion: number
    ciudad: number
    barrio: number
    lat: number
    lng: number
    telefono: number
    email: number
    sitioWeb: number
    tipoCocina: number
    precioMedio: number
    capacidadTotal: number
    estado: number
    servicios: number
    fotos: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type RestauranteAvgAggregateInputType = {
    lat?: true
    lng?: true
    precioMedio?: true
    capacidadTotal?: true
  }

  export type RestauranteSumAggregateInputType = {
    lat?: true
    lng?: true
    precioMedio?: true
    capacidadTotal?: true
  }

  export type RestauranteMinAggregateInputType = {
    id?: true
    managerId?: true
    nombre?: true
    descripcion?: true
    direccion?: true
    ciudad?: true
    barrio?: true
    lat?: true
    lng?: true
    telefono?: true
    email?: true
    sitioWeb?: true
    precioMedio?: true
    capacidadTotal?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type RestauranteMaxAggregateInputType = {
    id?: true
    managerId?: true
    nombre?: true
    descripcion?: true
    direccion?: true
    ciudad?: true
    barrio?: true
    lat?: true
    lng?: true
    telefono?: true
    email?: true
    sitioWeb?: true
    precioMedio?: true
    capacidadTotal?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type RestauranteCountAggregateInputType = {
    id?: true
    managerId?: true
    nombre?: true
    descripcion?: true
    direccion?: true
    ciudad?: true
    barrio?: true
    lat?: true
    lng?: true
    telefono?: true
    email?: true
    sitioWeb?: true
    tipoCocina?: true
    precioMedio?: true
    capacidadTotal?: true
    estado?: true
    servicios?: true
    fotos?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type RestauranteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurante to aggregate.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurantes
    **/
    _count?: true | RestauranteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestauranteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestauranteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestauranteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestauranteMaxAggregateInputType
  }

  export type GetRestauranteAggregateType<T extends RestauranteAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurante[P]>
      : GetScalarType<T[P], AggregateRestaurante[P]>
  }




  export type RestauranteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestauranteWhereInput
    orderBy?: RestauranteOrderByWithAggregationInput | RestauranteOrderByWithAggregationInput[]
    by: RestauranteScalarFieldEnum[] | RestauranteScalarFieldEnum
    having?: RestauranteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestauranteCountAggregateInputType | true
    _avg?: RestauranteAvgAggregateInputType
    _sum?: RestauranteSumAggregateInputType
    _min?: RestauranteMinAggregateInputType
    _max?: RestauranteMaxAggregateInputType
  }

  export type RestauranteGroupByOutputType = {
    id: string
    managerId: string
    nombre: string
    descripcion: string | null
    direccion: string
    ciudad: string
    barrio: string | null
    lat: number | null
    lng: number | null
    telefono: string | null
    email: string | null
    sitioWeb: string | null
    tipoCocina: string[]
    precioMedio: number
    capacidadTotal: number
    estado: $Enums.EstadoRestaurante
    servicios: JsonValue
    fotos: string[]
    creadoEn: Date
    actualizadoEn: Date
    _count: RestauranteCountAggregateOutputType | null
    _avg: RestauranteAvgAggregateOutputType | null
    _sum: RestauranteSumAggregateOutputType | null
    _min: RestauranteMinAggregateOutputType | null
    _max: RestauranteMaxAggregateOutputType | null
  }

  type GetRestauranteGroupByPayload<T extends RestauranteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestauranteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestauranteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestauranteGroupByOutputType[P]>
            : GetScalarType<T[P], RestauranteGroupByOutputType[P]>
        }
      >
    >


  export type RestauranteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    managerId?: boolean
    nombre?: boolean
    descripcion?: boolean
    direccion?: boolean
    ciudad?: boolean
    barrio?: boolean
    lat?: boolean
    lng?: boolean
    telefono?: boolean
    email?: boolean
    sitioWeb?: boolean
    tipoCocina?: boolean
    precioMedio?: boolean
    capacidadTotal?: boolean
    estado?: boolean
    servicios?: boolean
    fotos?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    manager?: boolean | UsuarioDefaultArgs<ExtArgs>
    turnos?: boolean | Restaurante$turnosArgs<ExtArgs>
    promos?: boolean | Restaurante$promosArgs<ExtArgs>
    reservasMesa?: boolean | Restaurante$reservasMesaArgs<ExtArgs>
    plantillasBolsa?: boolean | Restaurante$plantillasBolsaArgs<ExtArgs>
    publicaciones?: boolean | Restaurante$publicacionesArgs<ExtArgs>
    _count?: boolean | RestauranteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    managerId?: boolean
    nombre?: boolean
    descripcion?: boolean
    direccion?: boolean
    ciudad?: boolean
    barrio?: boolean
    lat?: boolean
    lng?: boolean
    telefono?: boolean
    email?: boolean
    sitioWeb?: boolean
    tipoCocina?: boolean
    precioMedio?: boolean
    capacidadTotal?: boolean
    estado?: boolean
    servicios?: boolean
    fotos?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    manager?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectScalar = {
    id?: boolean
    managerId?: boolean
    nombre?: boolean
    descripcion?: boolean
    direccion?: boolean
    ciudad?: boolean
    barrio?: boolean
    lat?: boolean
    lng?: boolean
    telefono?: boolean
    email?: boolean
    sitioWeb?: boolean
    tipoCocina?: boolean
    precioMedio?: boolean
    capacidadTotal?: boolean
    estado?: boolean
    servicios?: boolean
    fotos?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type RestauranteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UsuarioDefaultArgs<ExtArgs>
    turnos?: boolean | Restaurante$turnosArgs<ExtArgs>
    promos?: boolean | Restaurante$promosArgs<ExtArgs>
    reservasMesa?: boolean | Restaurante$reservasMesaArgs<ExtArgs>
    plantillasBolsa?: boolean | Restaurante$plantillasBolsaArgs<ExtArgs>
    publicaciones?: boolean | Restaurante$publicacionesArgs<ExtArgs>
    _count?: boolean | RestauranteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestauranteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RestaurantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurante"
    objects: {
      manager: Prisma.$UsuarioPayload<ExtArgs>
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
      promos: Prisma.$PromocionPayload<ExtArgs>[]
      reservasMesa: Prisma.$ReservaMesaPayload<ExtArgs>[]
      plantillasBolsa: Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>[]
      publicaciones: Prisma.$PublicacionBolsaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      managerId: string
      nombre: string
      descripcion: string | null
      direccion: string
      ciudad: string
      barrio: string | null
      lat: number | null
      lng: number | null
      telefono: string | null
      email: string | null
      sitioWeb: string | null
      tipoCocina: string[]
      precioMedio: number
      capacidadTotal: number
      estado: $Enums.EstadoRestaurante
      servicios: Prisma.JsonValue
      fotos: string[]
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["restaurante"]>
    composites: {}
  }

  type RestauranteGetPayload<S extends boolean | null | undefined | RestauranteDefaultArgs> = $Result.GetResult<Prisma.$RestaurantePayload, S>

  type RestauranteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestauranteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RestauranteCountAggregateInputType | true
    }

  export interface RestauranteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurante'], meta: { name: 'Restaurante' } }
    /**
     * Find zero or one Restaurante that matches the filter.
     * @param {RestauranteFindUniqueArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestauranteFindUniqueArgs>(args: SelectSubset<T, RestauranteFindUniqueArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Restaurante that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RestauranteFindUniqueOrThrowArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestauranteFindUniqueOrThrowArgs>(args: SelectSubset<T, RestauranteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Restaurante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindFirstArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestauranteFindFirstArgs>(args?: SelectSubset<T, RestauranteFindFirstArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Restaurante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindFirstOrThrowArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestauranteFindFirstOrThrowArgs>(args?: SelectSubset<T, RestauranteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Restaurantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurantes
     * const restaurantes = await prisma.restaurante.findMany()
     * 
     * // Get first 10 Restaurantes
     * const restaurantes = await prisma.restaurante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestauranteFindManyArgs>(args?: SelectSubset<T, RestauranteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Restaurante.
     * @param {RestauranteCreateArgs} args - Arguments to create a Restaurante.
     * @example
     * // Create one Restaurante
     * const Restaurante = await prisma.restaurante.create({
     *   data: {
     *     // ... data to create a Restaurante
     *   }
     * })
     * 
     */
    create<T extends RestauranteCreateArgs>(args: SelectSubset<T, RestauranteCreateArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Restaurantes.
     * @param {RestauranteCreateManyArgs} args - Arguments to create many Restaurantes.
     * @example
     * // Create many Restaurantes
     * const restaurante = await prisma.restaurante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestauranteCreateManyArgs>(args?: SelectSubset<T, RestauranteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurantes and returns the data saved in the database.
     * @param {RestauranteCreateManyAndReturnArgs} args - Arguments to create many Restaurantes.
     * @example
     * // Create many Restaurantes
     * const restaurante = await prisma.restaurante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurantes and only return the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestauranteCreateManyAndReturnArgs>(args?: SelectSubset<T, RestauranteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Restaurante.
     * @param {RestauranteDeleteArgs} args - Arguments to delete one Restaurante.
     * @example
     * // Delete one Restaurante
     * const Restaurante = await prisma.restaurante.delete({
     *   where: {
     *     // ... filter to delete one Restaurante
     *   }
     * })
     * 
     */
    delete<T extends RestauranteDeleteArgs>(args: SelectSubset<T, RestauranteDeleteArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Restaurante.
     * @param {RestauranteUpdateArgs} args - Arguments to update one Restaurante.
     * @example
     * // Update one Restaurante
     * const restaurante = await prisma.restaurante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestauranteUpdateArgs>(args: SelectSubset<T, RestauranteUpdateArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Restaurantes.
     * @param {RestauranteDeleteManyArgs} args - Arguments to filter Restaurantes to delete.
     * @example
     * // Delete a few Restaurantes
     * const { count } = await prisma.restaurante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestauranteDeleteManyArgs>(args?: SelectSubset<T, RestauranteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurantes
     * const restaurante = await prisma.restaurante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestauranteUpdateManyArgs>(args: SelectSubset<T, RestauranteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurante.
     * @param {RestauranteUpsertArgs} args - Arguments to update or create a Restaurante.
     * @example
     * // Update or create a Restaurante
     * const restaurante = await prisma.restaurante.upsert({
     *   create: {
     *     // ... data to create a Restaurante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurante we want to update
     *   }
     * })
     */
    upsert<T extends RestauranteUpsertArgs>(args: SelectSubset<T, RestauranteUpsertArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Restaurantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCountArgs} args - Arguments to filter Restaurantes to count.
     * @example
     * // Count the number of Restaurantes
     * const count = await prisma.restaurante.count({
     *   where: {
     *     // ... the filter for the Restaurantes we want to count
     *   }
     * })
    **/
    count<T extends RestauranteCountArgs>(
      args?: Subset<T, RestauranteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestauranteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestauranteAggregateArgs>(args: Subset<T, RestauranteAggregateArgs>): Prisma.PrismaPromise<GetRestauranteAggregateType<T>>

    /**
     * Group by Restaurante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteGroupByArgs} args - Group by arguments.
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
      T extends RestauranteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestauranteGroupByArgs['orderBy'] }
        : { orderBy?: RestauranteGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestauranteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestauranteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurante model
   */
  readonly fields: RestauranteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestauranteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    turnos<T extends Restaurante$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
    promos<T extends Restaurante$promosArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$promosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany"> | Null>
    reservasMesa<T extends Restaurante$reservasMesaArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$reservasMesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findMany"> | Null>
    plantillasBolsa<T extends Restaurante$plantillasBolsaArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$plantillasBolsaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findMany"> | Null>
    publicaciones<T extends Restaurante$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurante model
   */ 
  interface RestauranteFieldRefs {
    readonly id: FieldRef<"Restaurante", 'String'>
    readonly managerId: FieldRef<"Restaurante", 'String'>
    readonly nombre: FieldRef<"Restaurante", 'String'>
    readonly descripcion: FieldRef<"Restaurante", 'String'>
    readonly direccion: FieldRef<"Restaurante", 'String'>
    readonly ciudad: FieldRef<"Restaurante", 'String'>
    readonly barrio: FieldRef<"Restaurante", 'String'>
    readonly lat: FieldRef<"Restaurante", 'Float'>
    readonly lng: FieldRef<"Restaurante", 'Float'>
    readonly telefono: FieldRef<"Restaurante", 'String'>
    readonly email: FieldRef<"Restaurante", 'String'>
    readonly sitioWeb: FieldRef<"Restaurante", 'String'>
    readonly tipoCocina: FieldRef<"Restaurante", 'String[]'>
    readonly precioMedio: FieldRef<"Restaurante", 'Int'>
    readonly capacidadTotal: FieldRef<"Restaurante", 'Int'>
    readonly estado: FieldRef<"Restaurante", 'EstadoRestaurante'>
    readonly servicios: FieldRef<"Restaurante", 'Json'>
    readonly fotos: FieldRef<"Restaurante", 'String[]'>
    readonly creadoEn: FieldRef<"Restaurante", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Restaurante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurante findUnique
   */
  export type RestauranteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante findUniqueOrThrow
   */
  export type RestauranteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante findFirst
   */
  export type RestauranteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante findFirstOrThrow
   */
  export type RestauranteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante findMany
   */
  export type RestauranteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurantes to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante create
   */
  export type RestauranteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurante.
     */
    data: XOR<RestauranteCreateInput, RestauranteUncheckedCreateInput>
  }

  /**
   * Restaurante createMany
   */
  export type RestauranteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurantes.
     */
    data: RestauranteCreateManyInput | RestauranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurante createManyAndReturn
   */
  export type RestauranteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Restaurantes.
     */
    data: RestauranteCreateManyInput | RestauranteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurante update
   */
  export type RestauranteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurante.
     */
    data: XOR<RestauranteUpdateInput, RestauranteUncheckedUpdateInput>
    /**
     * Choose, which Restaurante to update.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante updateMany
   */
  export type RestauranteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurantes.
     */
    data: XOR<RestauranteUpdateManyMutationInput, RestauranteUncheckedUpdateManyInput>
    /**
     * Filter which Restaurantes to update
     */
    where?: RestauranteWhereInput
  }

  /**
   * Restaurante upsert
   */
  export type RestauranteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurante to update in case it exists.
     */
    where: RestauranteWhereUniqueInput
    /**
     * In case the Restaurante found by the `where` argument doesn't exist, create a new Restaurante with this data.
     */
    create: XOR<RestauranteCreateInput, RestauranteUncheckedCreateInput>
    /**
     * In case the Restaurante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestauranteUpdateInput, RestauranteUncheckedUpdateInput>
  }

  /**
   * Restaurante delete
   */
  export type RestauranteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter which Restaurante to delete.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante deleteMany
   */
  export type RestauranteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurantes to delete
     */
    where?: RestauranteWhereInput
  }

  /**
   * Restaurante.turnos
   */
  export type Restaurante$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Restaurante.promos
   */
  export type Restaurante$promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    where?: PromocionWhereInput
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    cursor?: PromocionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Restaurante.reservasMesa
   */
  export type Restaurante$reservasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    where?: ReservaMesaWhereInput
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    cursor?: ReservaMesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaMesaScalarFieldEnum | ReservaMesaScalarFieldEnum[]
  }

  /**
   * Restaurante.plantillasBolsa
   */
  export type Restaurante$plantillasBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    where?: BolsaSorpresaPlantillaWhereInput
    orderBy?: BolsaSorpresaPlantillaOrderByWithRelationInput | BolsaSorpresaPlantillaOrderByWithRelationInput[]
    cursor?: BolsaSorpresaPlantillaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BolsaSorpresaPlantillaScalarFieldEnum | BolsaSorpresaPlantillaScalarFieldEnum[]
  }

  /**
   * Restaurante.publicaciones
   */
  export type Restaurante$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    where?: PublicacionBolsaWhereInput
    orderBy?: PublicacionBolsaOrderByWithRelationInput | PublicacionBolsaOrderByWithRelationInput[]
    cursor?: PublicacionBolsaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionBolsaScalarFieldEnum | PublicacionBolsaScalarFieldEnum[]
  }

  /**
   * Restaurante without action
   */
  export type RestauranteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
  }


  /**
   * Model Turno
   */

  export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  export type TurnoAvgAggregateOutputType = {
    diasSemana: number | null
    intervaloMin: number | null
    capacidad: number | null
  }

  export type TurnoSumAggregateOutputType = {
    diasSemana: number[]
    intervaloMin: number | null
    capacidad: number | null
  }

  export type TurnoMinAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    nombre: string | null
    horaInicio: string | null
    horaFin: string | null
    intervaloMin: number | null
    capacidad: number | null
    activo: boolean | null
    creadoEn: Date | null
  }

  export type TurnoMaxAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    nombre: string | null
    horaInicio: string | null
    horaFin: string | null
    intervaloMin: number | null
    capacidad: number | null
    activo: boolean | null
    creadoEn: Date | null
  }

  export type TurnoCountAggregateOutputType = {
    id: number
    restauranteId: number
    nombre: number
    diasSemana: number
    horaInicio: number
    horaFin: number
    intervaloMin: number
    capacidad: number
    activo: number
    creadoEn: number
    _all: number
  }


  export type TurnoAvgAggregateInputType = {
    diasSemana?: true
    intervaloMin?: true
    capacidad?: true
  }

  export type TurnoSumAggregateInputType = {
    diasSemana?: true
    intervaloMin?: true
    capacidad?: true
  }

  export type TurnoMinAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    horaInicio?: true
    horaFin?: true
    intervaloMin?: true
    capacidad?: true
    activo?: true
    creadoEn?: true
  }

  export type TurnoMaxAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    horaInicio?: true
    horaFin?: true
    intervaloMin?: true
    capacidad?: true
    activo?: true
    creadoEn?: true
  }

  export type TurnoCountAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    diasSemana?: true
    horaInicio?: true
    horaFin?: true
    intervaloMin?: true
    capacidad?: true
    activo?: true
    creadoEn?: true
    _all?: true
  }

  export type TurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turno to aggregate.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoMaxAggregateInputType
  }

  export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurno[P]>
      : GetScalarType<T[P], AggregateTurno[P]>
  }




  export type TurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithAggregationInput | TurnoOrderByWithAggregationInput[]
    by: TurnoScalarFieldEnum[] | TurnoScalarFieldEnum
    having?: TurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoCountAggregateInputType | true
    _avg?: TurnoAvgAggregateInputType
    _sum?: TurnoSumAggregateInputType
    _min?: TurnoMinAggregateInputType
    _max?: TurnoMaxAggregateInputType
  }

  export type TurnoGroupByOutputType = {
    id: string
    restauranteId: string
    nombre: string
    diasSemana: number[]
    horaInicio: string
    horaFin: string
    intervaloMin: number
    capacidad: number
    activo: boolean
    creadoEn: Date
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoGroupByOutputType[P]>
        }
      >
    >


  export type TurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    diasSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    intervaloMin?: boolean
    capacidad?: boolean
    activo?: boolean
    creadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    diasSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    intervaloMin?: boolean
    capacidad?: boolean
    activo?: boolean
    creadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectScalar = {
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    diasSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    intervaloMin?: boolean
    capacidad?: boolean
    activo?: boolean
    creadoEn?: boolean
  }

  export type TurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type TurnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $TurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turno"
    objects: {
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restauranteId: string
      nombre: string
      diasSemana: number[]
      horaInicio: string
      horaFin: string
      intervaloMin: number
      capacidad: number
      activo: boolean
      creadoEn: Date
    }, ExtArgs["result"]["turno"]>
    composites: {}
  }

  type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = $Result.GetResult<Prisma.$TurnoPayload, S>

  type TurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurnoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TurnoCountAggregateInputType | true
    }

  export interface TurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turno'], meta: { name: 'Turno' } }
    /**
     * Find zero or one Turno that matches the filter.
     * @param {TurnoFindUniqueArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoFindUniqueArgs>(args: SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Turno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TurnoFindUniqueOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Turno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoFindFirstArgs>(args?: SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Turno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turno.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoWithIdOnly = await prisma.turno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoFindManyArgs>(args?: SelectSubset<T, TurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Turno.
     * @param {TurnoCreateArgs} args - Arguments to create a Turno.
     * @example
     * // Create one Turno
     * const Turno = await prisma.turno.create({
     *   data: {
     *     // ... data to create a Turno
     *   }
     * })
     * 
     */
    create<T extends TurnoCreateArgs>(args: SelectSubset<T, TurnoCreateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Turnos.
     * @param {TurnoCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoCreateManyArgs>(args?: SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnos and returns the data saved in the database.
     * @param {TurnoCreateManyAndReturnArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnos and only return the `id`
     * const turnoWithIdOnly = await prisma.turno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnoCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Turno.
     * @param {TurnoDeleteArgs} args - Arguments to delete one Turno.
     * @example
     * // Delete one Turno
     * const Turno = await prisma.turno.delete({
     *   where: {
     *     // ... filter to delete one Turno
     *   }
     * })
     * 
     */
    delete<T extends TurnoDeleteArgs>(args: SelectSubset<T, TurnoDeleteArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Turno.
     * @param {TurnoUpdateArgs} args - Arguments to update one Turno.
     * @example
     * // Update one Turno
     * const turno = await prisma.turno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoUpdateArgs>(args: SelectSubset<T, TurnoUpdateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Turnos.
     * @param {TurnoDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoDeleteManyArgs>(args?: SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoUpdateManyArgs>(args: SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turno.
     * @param {TurnoUpsertArgs} args - Arguments to update or create a Turno.
     * @example
     * // Update or create a Turno
     * const turno = await prisma.turno.upsert({
     *   create: {
     *     // ... data to create a Turno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turno we want to update
     *   }
     * })
     */
    upsert<T extends TurnoUpsertArgs>(args: SelectSubset<T, TurnoUpsertArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turno.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnoCountArgs>(
      args?: Subset<T, TurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurnoAggregateArgs>(args: Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>

    /**
     * Group by Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoGroupByArgs} args - Group by arguments.
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
      T extends TurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turno model
   */
  readonly fields: TurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turno model
   */ 
  interface TurnoFieldRefs {
    readonly id: FieldRef<"Turno", 'String'>
    readonly restauranteId: FieldRef<"Turno", 'String'>
    readonly nombre: FieldRef<"Turno", 'String'>
    readonly diasSemana: FieldRef<"Turno", 'Int[]'>
    readonly horaInicio: FieldRef<"Turno", 'String'>
    readonly horaFin: FieldRef<"Turno", 'String'>
    readonly intervaloMin: FieldRef<"Turno", 'Int'>
    readonly capacidad: FieldRef<"Turno", 'Int'>
    readonly activo: FieldRef<"Turno", 'Boolean'>
    readonly creadoEn: FieldRef<"Turno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turno findUnique
   */
  export type TurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findUniqueOrThrow
   */
  export type TurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findFirst
   */
  export type TurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findFirstOrThrow
   */
  export type TurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findMany
   */
  export type TurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno create
   */
  export type TurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Turno.
     */
    data: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
  }

  /**
   * Turno createMany
   */
  export type TurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turno createManyAndReturn
   */
  export type TurnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turno update
   */
  export type TurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Turno.
     */
    data: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
    /**
     * Choose, which Turno to update.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno updateMany
   */
  export type TurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnoWhereInput
  }

  /**
   * Turno upsert
   */
  export type TurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Turno to update in case it exists.
     */
    where: TurnoWhereUniqueInput
    /**
     * In case the Turno found by the `where` argument doesn't exist, create a new Turno with this data.
     */
    create: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
    /**
     * In case the Turno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
  }

  /**
   * Turno delete
   */
  export type TurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter which Turno to delete.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno deleteMany
   */
  export type TurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnoWhereInput
  }

  /**
   * Turno without action
   */
  export type TurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
  }


  /**
   * Model Promocion
   */

  export type AggregatePromocion = {
    _count: PromocionCountAggregateOutputType | null
    _avg: PromocionAvgAggregateOutputType | null
    _sum: PromocionSumAggregateOutputType | null
    _min: PromocionMinAggregateOutputType | null
    _max: PromocionMaxAggregateOutputType | null
  }

  export type PromocionAvgAggregateOutputType = {
    valor: number | null
    diasSemana: number | null
  }

  export type PromocionSumAggregateOutputType = {
    valor: number | null
    diasSemana: number[]
  }

  export type PromocionMinAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    nombre: string | null
    tipo: $Enums.TipoPromo | null
    valor: number | null
    condiciones: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoPromo | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PromocionMaxAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    nombre: string | null
    tipo: $Enums.TipoPromo | null
    valor: number | null
    condiciones: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoPromo | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PromocionCountAggregateOutputType = {
    id: number
    restauranteId: number
    nombre: number
    tipo: number
    valor: number
    condiciones: number
    fechaInicio: number
    fechaFin: number
    diasSemana: number
    horaInicio: number
    horaFin: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type PromocionAvgAggregateInputType = {
    valor?: true
    diasSemana?: true
  }

  export type PromocionSumAggregateInputType = {
    valor?: true
    diasSemana?: true
  }

  export type PromocionMinAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    tipo?: true
    valor?: true
    condiciones?: true
    fechaInicio?: true
    fechaFin?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PromocionMaxAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    tipo?: true
    valor?: true
    condiciones?: true
    fechaInicio?: true
    fechaFin?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PromocionCountAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    tipo?: true
    valor?: true
    condiciones?: true
    fechaInicio?: true
    fechaFin?: true
    diasSemana?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type PromocionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocion to aggregate.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promocions
    **/
    _count?: true | PromocionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromocionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromocionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromocionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromocionMaxAggregateInputType
  }

  export type GetPromocionAggregateType<T extends PromocionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromocion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromocion[P]>
      : GetScalarType<T[P], AggregatePromocion[P]>
  }




  export type PromocionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocionWhereInput
    orderBy?: PromocionOrderByWithAggregationInput | PromocionOrderByWithAggregationInput[]
    by: PromocionScalarFieldEnum[] | PromocionScalarFieldEnum
    having?: PromocionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromocionCountAggregateInputType | true
    _avg?: PromocionAvgAggregateInputType
    _sum?: PromocionSumAggregateInputType
    _min?: PromocionMinAggregateInputType
    _max?: PromocionMaxAggregateInputType
  }

  export type PromocionGroupByOutputType = {
    id: string
    restauranteId: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    diasSemana: number[]
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoPromo
    creadoEn: Date
    actualizadoEn: Date
    _count: PromocionCountAggregateOutputType | null
    _avg: PromocionAvgAggregateOutputType | null
    _sum: PromocionSumAggregateOutputType | null
    _min: PromocionMinAggregateOutputType | null
    _max: PromocionMaxAggregateOutputType | null
  }

  type GetPromocionGroupByPayload<T extends PromocionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromocionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromocionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromocionGroupByOutputType[P]>
            : GetScalarType<T[P], PromocionGroupByOutputType[P]>
        }
      >
    >


  export type PromocionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    tipo?: boolean
    valor?: boolean
    condiciones?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    diasSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    reservasMesa?: boolean | Promocion$reservasMesaArgs<ExtArgs>
    _count?: boolean | PromocionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocion"]>

  export type PromocionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    tipo?: boolean
    valor?: boolean
    condiciones?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    diasSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocion"]>

  export type PromocionSelectScalar = {
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    tipo?: boolean
    valor?: boolean
    condiciones?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    diasSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type PromocionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    reservasMesa?: boolean | Promocion$reservasMesaArgs<ExtArgs>
    _count?: boolean | PromocionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromocionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $PromocionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promocion"
    objects: {
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
      reservasMesa: Prisma.$ReservaMesaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restauranteId: string
      nombre: string
      tipo: $Enums.TipoPromo
      valor: number
      condiciones: string | null
      fechaInicio: Date | null
      fechaFin: Date | null
      diasSemana: number[]
      horaInicio: string | null
      horaFin: string | null
      estado: $Enums.EstadoPromo
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["promocion"]>
    composites: {}
  }

  type PromocionGetPayload<S extends boolean | null | undefined | PromocionDefaultArgs> = $Result.GetResult<Prisma.$PromocionPayload, S>

  type PromocionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromocionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromocionCountAggregateInputType | true
    }

  export interface PromocionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promocion'], meta: { name: 'Promocion' } }
    /**
     * Find zero or one Promocion that matches the filter.
     * @param {PromocionFindUniqueArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromocionFindUniqueArgs>(args: SelectSubset<T, PromocionFindUniqueArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promocion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromocionFindUniqueOrThrowArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromocionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromocionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promocion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindFirstArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromocionFindFirstArgs>(args?: SelectSubset<T, PromocionFindFirstArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promocion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindFirstOrThrowArgs} args - Arguments to find a Promocion
     * @example
     * // Get one Promocion
     * const promocion = await prisma.promocion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromocionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromocionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promocions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promocions
     * const promocions = await prisma.promocion.findMany()
     * 
     * // Get first 10 Promocions
     * const promocions = await prisma.promocion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promocionWithIdOnly = await prisma.promocion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromocionFindManyArgs>(args?: SelectSubset<T, PromocionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promocion.
     * @param {PromocionCreateArgs} args - Arguments to create a Promocion.
     * @example
     * // Create one Promocion
     * const Promocion = await prisma.promocion.create({
     *   data: {
     *     // ... data to create a Promocion
     *   }
     * })
     * 
     */
    create<T extends PromocionCreateArgs>(args: SelectSubset<T, PromocionCreateArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promocions.
     * @param {PromocionCreateManyArgs} args - Arguments to create many Promocions.
     * @example
     * // Create many Promocions
     * const promocion = await prisma.promocion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromocionCreateManyArgs>(args?: SelectSubset<T, PromocionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promocions and returns the data saved in the database.
     * @param {PromocionCreateManyAndReturnArgs} args - Arguments to create many Promocions.
     * @example
     * // Create many Promocions
     * const promocion = await prisma.promocion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promocions and only return the `id`
     * const promocionWithIdOnly = await prisma.promocion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromocionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromocionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promocion.
     * @param {PromocionDeleteArgs} args - Arguments to delete one Promocion.
     * @example
     * // Delete one Promocion
     * const Promocion = await prisma.promocion.delete({
     *   where: {
     *     // ... filter to delete one Promocion
     *   }
     * })
     * 
     */
    delete<T extends PromocionDeleteArgs>(args: SelectSubset<T, PromocionDeleteArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promocion.
     * @param {PromocionUpdateArgs} args - Arguments to update one Promocion.
     * @example
     * // Update one Promocion
     * const promocion = await prisma.promocion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromocionUpdateArgs>(args: SelectSubset<T, PromocionUpdateArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promocions.
     * @param {PromocionDeleteManyArgs} args - Arguments to filter Promocions to delete.
     * @example
     * // Delete a few Promocions
     * const { count } = await prisma.promocion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromocionDeleteManyArgs>(args?: SelectSubset<T, PromocionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promocions
     * const promocion = await prisma.promocion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromocionUpdateManyArgs>(args: SelectSubset<T, PromocionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promocion.
     * @param {PromocionUpsertArgs} args - Arguments to update or create a Promocion.
     * @example
     * // Update or create a Promocion
     * const promocion = await prisma.promocion.upsert({
     *   create: {
     *     // ... data to create a Promocion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promocion we want to update
     *   }
     * })
     */
    upsert<T extends PromocionUpsertArgs>(args: SelectSubset<T, PromocionUpsertArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promocions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionCountArgs} args - Arguments to filter Promocions to count.
     * @example
     * // Count the number of Promocions
     * const count = await prisma.promocion.count({
     *   where: {
     *     // ... the filter for the Promocions we want to count
     *   }
     * })
    **/
    count<T extends PromocionCountArgs>(
      args?: Subset<T, PromocionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromocionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromocionAggregateArgs>(args: Subset<T, PromocionAggregateArgs>): Prisma.PrismaPromise<GetPromocionAggregateType<T>>

    /**
     * Group by Promocion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocionGroupByArgs} args - Group by arguments.
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
      T extends PromocionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromocionGroupByArgs['orderBy'] }
        : { orderBy?: PromocionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromocionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promocion model
   */
  readonly fields: PromocionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promocion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromocionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservasMesa<T extends Promocion$reservasMesaArgs<ExtArgs> = {}>(args?: Subset<T, Promocion$reservasMesaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promocion model
   */ 
  interface PromocionFieldRefs {
    readonly id: FieldRef<"Promocion", 'String'>
    readonly restauranteId: FieldRef<"Promocion", 'String'>
    readonly nombre: FieldRef<"Promocion", 'String'>
    readonly tipo: FieldRef<"Promocion", 'TipoPromo'>
    readonly valor: FieldRef<"Promocion", 'Float'>
    readonly condiciones: FieldRef<"Promocion", 'String'>
    readonly fechaInicio: FieldRef<"Promocion", 'DateTime'>
    readonly fechaFin: FieldRef<"Promocion", 'DateTime'>
    readonly diasSemana: FieldRef<"Promocion", 'Int[]'>
    readonly horaInicio: FieldRef<"Promocion", 'String'>
    readonly horaFin: FieldRef<"Promocion", 'String'>
    readonly estado: FieldRef<"Promocion", 'EstadoPromo'>
    readonly creadoEn: FieldRef<"Promocion", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Promocion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promocion findUnique
   */
  export type PromocionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion findUniqueOrThrow
   */
  export type PromocionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion findFirst
   */
  export type PromocionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion findFirstOrThrow
   */
  export type PromocionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocion to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocions.
     */
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion findMany
   */
  export type PromocionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter, which Promocions to fetch.
     */
    where?: PromocionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocions to fetch.
     */
    orderBy?: PromocionOrderByWithRelationInput | PromocionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promocions.
     */
    cursor?: PromocionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocions.
     */
    skip?: number
    distinct?: PromocionScalarFieldEnum | PromocionScalarFieldEnum[]
  }

  /**
   * Promocion create
   */
  export type PromocionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promocion.
     */
    data: XOR<PromocionCreateInput, PromocionUncheckedCreateInput>
  }

  /**
   * Promocion createMany
   */
  export type PromocionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promocions.
     */
    data: PromocionCreateManyInput | PromocionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocion createManyAndReturn
   */
  export type PromocionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promocions.
     */
    data: PromocionCreateManyInput | PromocionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promocion update
   */
  export type PromocionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promocion.
     */
    data: XOR<PromocionUpdateInput, PromocionUncheckedUpdateInput>
    /**
     * Choose, which Promocion to update.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion updateMany
   */
  export type PromocionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promocions.
     */
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyInput>
    /**
     * Filter which Promocions to update
     */
    where?: PromocionWhereInput
  }

  /**
   * Promocion upsert
   */
  export type PromocionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promocion to update in case it exists.
     */
    where: PromocionWhereUniqueInput
    /**
     * In case the Promocion found by the `where` argument doesn't exist, create a new Promocion with this data.
     */
    create: XOR<PromocionCreateInput, PromocionUncheckedCreateInput>
    /**
     * In case the Promocion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromocionUpdateInput, PromocionUncheckedUpdateInput>
  }

  /**
   * Promocion delete
   */
  export type PromocionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    /**
     * Filter which Promocion to delete.
     */
    where: PromocionWhereUniqueInput
  }

  /**
   * Promocion deleteMany
   */
  export type PromocionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocions to delete
     */
    where?: PromocionWhereInput
  }

  /**
   * Promocion.reservasMesa
   */
  export type Promocion$reservasMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    where?: ReservaMesaWhereInput
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    cursor?: ReservaMesaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaMesaScalarFieldEnum | ReservaMesaScalarFieldEnum[]
  }

  /**
   * Promocion without action
   */
  export type PromocionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
  }


  /**
   * Model ReservaMesa
   */

  export type AggregateReservaMesa = {
    _count: ReservaMesaCountAggregateOutputType | null
    _avg: ReservaMesaAvgAggregateOutputType | null
    _sum: ReservaMesaSumAggregateOutputType | null
    _min: ReservaMesaMinAggregateOutputType | null
    _max: ReservaMesaMaxAggregateOutputType | null
  }

  export type ReservaMesaAvgAggregateOutputType = {
    comensales: number | null
  }

  export type ReservaMesaSumAggregateOutputType = {
    comensales: number | null
  }

  export type ReservaMesaMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    restauranteId: string | null
    promocionId: string | null
    fecha: Date | null
    hora: string | null
    comensales: number | null
    estado: $Enums.EstadoReserva | null
    codigo: string | null
    notas: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ReservaMesaMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    restauranteId: string | null
    promocionId: string | null
    fecha: Date | null
    hora: string | null
    comensales: number | null
    estado: $Enums.EstadoReserva | null
    codigo: string | null
    notas: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ReservaMesaCountAggregateOutputType = {
    id: number
    clienteId: number
    restauranteId: number
    promocionId: number
    fecha: number
    hora: number
    comensales: number
    estado: number
    codigo: number
    notas: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ReservaMesaAvgAggregateInputType = {
    comensales?: true
  }

  export type ReservaMesaSumAggregateInputType = {
    comensales?: true
  }

  export type ReservaMesaMinAggregateInputType = {
    id?: true
    clienteId?: true
    restauranteId?: true
    promocionId?: true
    fecha?: true
    hora?: true
    comensales?: true
    estado?: true
    codigo?: true
    notas?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ReservaMesaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    restauranteId?: true
    promocionId?: true
    fecha?: true
    hora?: true
    comensales?: true
    estado?: true
    codigo?: true
    notas?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ReservaMesaCountAggregateInputType = {
    id?: true
    clienteId?: true
    restauranteId?: true
    promocionId?: true
    fecha?: true
    hora?: true
    comensales?: true
    estado?: true
    codigo?: true
    notas?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ReservaMesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservaMesa to aggregate.
     */
    where?: ReservaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaMesas to fetch.
     */
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaMesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservaMesas
    **/
    _count?: true | ReservaMesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaMesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaMesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMesaMaxAggregateInputType
  }

  export type GetReservaMesaAggregateType<T extends ReservaMesaAggregateArgs> = {
        [P in keyof T & keyof AggregateReservaMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservaMesa[P]>
      : GetScalarType<T[P], AggregateReservaMesa[P]>
  }




  export type ReservaMesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaMesaWhereInput
    orderBy?: ReservaMesaOrderByWithAggregationInput | ReservaMesaOrderByWithAggregationInput[]
    by: ReservaMesaScalarFieldEnum[] | ReservaMesaScalarFieldEnum
    having?: ReservaMesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaMesaCountAggregateInputType | true
    _avg?: ReservaMesaAvgAggregateInputType
    _sum?: ReservaMesaSumAggregateInputType
    _min?: ReservaMesaMinAggregateInputType
    _max?: ReservaMesaMaxAggregateInputType
  }

  export type ReservaMesaGroupByOutputType = {
    id: string
    clienteId: string
    restauranteId: string
    promocionId: string | null
    fecha: Date
    hora: string
    comensales: number
    estado: $Enums.EstadoReserva
    codigo: string
    notas: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: ReservaMesaCountAggregateOutputType | null
    _avg: ReservaMesaAvgAggregateOutputType | null
    _sum: ReservaMesaSumAggregateOutputType | null
    _min: ReservaMesaMinAggregateOutputType | null
    _max: ReservaMesaMaxAggregateOutputType | null
  }

  type GetReservaMesaGroupByPayload<T extends ReservaMesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaMesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaMesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaMesaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaMesaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaMesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    promocionId?: boolean
    fecha?: boolean
    hora?: boolean
    comensales?: boolean
    estado?: boolean
    codigo?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    promocion?: boolean | ReservaMesa$promocionArgs<ExtArgs>
    resena?: boolean | ReservaMesa$resenaArgs<ExtArgs>
  }, ExtArgs["result"]["reservaMesa"]>

  export type ReservaMesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    promocionId?: boolean
    fecha?: boolean
    hora?: boolean
    comensales?: boolean
    estado?: boolean
    codigo?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    promocion?: boolean | ReservaMesa$promocionArgs<ExtArgs>
  }, ExtArgs["result"]["reservaMesa"]>

  export type ReservaMesaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    promocionId?: boolean
    fecha?: boolean
    hora?: boolean
    comensales?: boolean
    estado?: boolean
    codigo?: boolean
    notas?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ReservaMesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    promocion?: boolean | ReservaMesa$promocionArgs<ExtArgs>
    resena?: boolean | ReservaMesa$resenaArgs<ExtArgs>
  }
  export type ReservaMesaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    promocion?: boolean | ReservaMesa$promocionArgs<ExtArgs>
  }

  export type $ReservaMesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservaMesa"
    objects: {
      cliente: Prisma.$UsuarioPayload<ExtArgs>
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
      promocion: Prisma.$PromocionPayload<ExtArgs> | null
      resena: Prisma.$ResenaMesaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      restauranteId: string
      promocionId: string | null
      fecha: Date
      hora: string
      comensales: number
      estado: $Enums.EstadoReserva
      codigo: string
      notas: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["reservaMesa"]>
    composites: {}
  }

  type ReservaMesaGetPayload<S extends boolean | null | undefined | ReservaMesaDefaultArgs> = $Result.GetResult<Prisma.$ReservaMesaPayload, S>

  type ReservaMesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservaMesaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservaMesaCountAggregateInputType | true
    }

  export interface ReservaMesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservaMesa'], meta: { name: 'ReservaMesa' } }
    /**
     * Find zero or one ReservaMesa that matches the filter.
     * @param {ReservaMesaFindUniqueArgs} args - Arguments to find a ReservaMesa
     * @example
     * // Get one ReservaMesa
     * const reservaMesa = await prisma.reservaMesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaMesaFindUniqueArgs>(args: SelectSubset<T, ReservaMesaFindUniqueArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReservaMesa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservaMesaFindUniqueOrThrowArgs} args - Arguments to find a ReservaMesa
     * @example
     * // Get one ReservaMesa
     * const reservaMesa = await prisma.reservaMesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaMesaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaMesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReservaMesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaFindFirstArgs} args - Arguments to find a ReservaMesa
     * @example
     * // Get one ReservaMesa
     * const reservaMesa = await prisma.reservaMesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaMesaFindFirstArgs>(args?: SelectSubset<T, ReservaMesaFindFirstArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReservaMesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaFindFirstOrThrowArgs} args - Arguments to find a ReservaMesa
     * @example
     * // Get one ReservaMesa
     * const reservaMesa = await prisma.reservaMesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaMesaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaMesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReservaMesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservaMesas
     * const reservaMesas = await prisma.reservaMesa.findMany()
     * 
     * // Get first 10 ReservaMesas
     * const reservaMesas = await prisma.reservaMesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaMesaWithIdOnly = await prisma.reservaMesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaMesaFindManyArgs>(args?: SelectSubset<T, ReservaMesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReservaMesa.
     * @param {ReservaMesaCreateArgs} args - Arguments to create a ReservaMesa.
     * @example
     * // Create one ReservaMesa
     * const ReservaMesa = await prisma.reservaMesa.create({
     *   data: {
     *     // ... data to create a ReservaMesa
     *   }
     * })
     * 
     */
    create<T extends ReservaMesaCreateArgs>(args: SelectSubset<T, ReservaMesaCreateArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReservaMesas.
     * @param {ReservaMesaCreateManyArgs} args - Arguments to create many ReservaMesas.
     * @example
     * // Create many ReservaMesas
     * const reservaMesa = await prisma.reservaMesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaMesaCreateManyArgs>(args?: SelectSubset<T, ReservaMesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservaMesas and returns the data saved in the database.
     * @param {ReservaMesaCreateManyAndReturnArgs} args - Arguments to create many ReservaMesas.
     * @example
     * // Create many ReservaMesas
     * const reservaMesa = await prisma.reservaMesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservaMesas and only return the `id`
     * const reservaMesaWithIdOnly = await prisma.reservaMesa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaMesaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaMesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReservaMesa.
     * @param {ReservaMesaDeleteArgs} args - Arguments to delete one ReservaMesa.
     * @example
     * // Delete one ReservaMesa
     * const ReservaMesa = await prisma.reservaMesa.delete({
     *   where: {
     *     // ... filter to delete one ReservaMesa
     *   }
     * })
     * 
     */
    delete<T extends ReservaMesaDeleteArgs>(args: SelectSubset<T, ReservaMesaDeleteArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReservaMesa.
     * @param {ReservaMesaUpdateArgs} args - Arguments to update one ReservaMesa.
     * @example
     * // Update one ReservaMesa
     * const reservaMesa = await prisma.reservaMesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaMesaUpdateArgs>(args: SelectSubset<T, ReservaMesaUpdateArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReservaMesas.
     * @param {ReservaMesaDeleteManyArgs} args - Arguments to filter ReservaMesas to delete.
     * @example
     * // Delete a few ReservaMesas
     * const { count } = await prisma.reservaMesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaMesaDeleteManyArgs>(args?: SelectSubset<T, ReservaMesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservaMesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservaMesas
     * const reservaMesa = await prisma.reservaMesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaMesaUpdateManyArgs>(args: SelectSubset<T, ReservaMesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservaMesa.
     * @param {ReservaMesaUpsertArgs} args - Arguments to update or create a ReservaMesa.
     * @example
     * // Update or create a ReservaMesa
     * const reservaMesa = await prisma.reservaMesa.upsert({
     *   create: {
     *     // ... data to create a ReservaMesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservaMesa we want to update
     *   }
     * })
     */
    upsert<T extends ReservaMesaUpsertArgs>(args: SelectSubset<T, ReservaMesaUpsertArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReservaMesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaCountArgs} args - Arguments to filter ReservaMesas to count.
     * @example
     * // Count the number of ReservaMesas
     * const count = await prisma.reservaMesa.count({
     *   where: {
     *     // ... the filter for the ReservaMesas we want to count
     *   }
     * })
    **/
    count<T extends ReservaMesaCountArgs>(
      args?: Subset<T, ReservaMesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaMesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservaMesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaMesaAggregateArgs>(args: Subset<T, ReservaMesaAggregateArgs>): Prisma.PrismaPromise<GetReservaMesaAggregateType<T>>

    /**
     * Group by ReservaMesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaMesaGroupByArgs} args - Group by arguments.
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
      T extends ReservaMesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaMesaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaMesaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaMesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservaMesa model
   */
  readonly fields: ReservaMesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservaMesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaMesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    promocion<T extends ReservaMesa$promocionArgs<ExtArgs> = {}>(args?: Subset<T, ReservaMesa$promocionArgs<ExtArgs>>): Prisma__PromocionClient<$Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    resena<T extends ReservaMesa$resenaArgs<ExtArgs> = {}>(args?: Subset<T, ReservaMesa$resenaArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReservaMesa model
   */ 
  interface ReservaMesaFieldRefs {
    readonly id: FieldRef<"ReservaMesa", 'String'>
    readonly clienteId: FieldRef<"ReservaMesa", 'String'>
    readonly restauranteId: FieldRef<"ReservaMesa", 'String'>
    readonly promocionId: FieldRef<"ReservaMesa", 'String'>
    readonly fecha: FieldRef<"ReservaMesa", 'DateTime'>
    readonly hora: FieldRef<"ReservaMesa", 'String'>
    readonly comensales: FieldRef<"ReservaMesa", 'Int'>
    readonly estado: FieldRef<"ReservaMesa", 'EstadoReserva'>
    readonly codigo: FieldRef<"ReservaMesa", 'String'>
    readonly notas: FieldRef<"ReservaMesa", 'String'>
    readonly creadoEn: FieldRef<"ReservaMesa", 'DateTime'>
    readonly actualizadoEn: FieldRef<"ReservaMesa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReservaMesa findUnique
   */
  export type ReservaMesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaMesa to fetch.
     */
    where: ReservaMesaWhereUniqueInput
  }

  /**
   * ReservaMesa findUniqueOrThrow
   */
  export type ReservaMesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaMesa to fetch.
     */
    where: ReservaMesaWhereUniqueInput
  }

  /**
   * ReservaMesa findFirst
   */
  export type ReservaMesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaMesa to fetch.
     */
    where?: ReservaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaMesas to fetch.
     */
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservaMesas.
     */
    cursor?: ReservaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaMesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservaMesas.
     */
    distinct?: ReservaMesaScalarFieldEnum | ReservaMesaScalarFieldEnum[]
  }

  /**
   * ReservaMesa findFirstOrThrow
   */
  export type ReservaMesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaMesa to fetch.
     */
    where?: ReservaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaMesas to fetch.
     */
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservaMesas.
     */
    cursor?: ReservaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaMesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservaMesas.
     */
    distinct?: ReservaMesaScalarFieldEnum | ReservaMesaScalarFieldEnum[]
  }

  /**
   * ReservaMesa findMany
   */
  export type ReservaMesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaMesas to fetch.
     */
    where?: ReservaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaMesas to fetch.
     */
    orderBy?: ReservaMesaOrderByWithRelationInput | ReservaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservaMesas.
     */
    cursor?: ReservaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaMesas.
     */
    skip?: number
    distinct?: ReservaMesaScalarFieldEnum | ReservaMesaScalarFieldEnum[]
  }

  /**
   * ReservaMesa create
   */
  export type ReservaMesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservaMesa.
     */
    data: XOR<ReservaMesaCreateInput, ReservaMesaUncheckedCreateInput>
  }

  /**
   * ReservaMesa createMany
   */
  export type ReservaMesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservaMesas.
     */
    data: ReservaMesaCreateManyInput | ReservaMesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservaMesa createManyAndReturn
   */
  export type ReservaMesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReservaMesas.
     */
    data: ReservaMesaCreateManyInput | ReservaMesaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservaMesa update
   */
  export type ReservaMesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservaMesa.
     */
    data: XOR<ReservaMesaUpdateInput, ReservaMesaUncheckedUpdateInput>
    /**
     * Choose, which ReservaMesa to update.
     */
    where: ReservaMesaWhereUniqueInput
  }

  /**
   * ReservaMesa updateMany
   */
  export type ReservaMesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservaMesas.
     */
    data: XOR<ReservaMesaUpdateManyMutationInput, ReservaMesaUncheckedUpdateManyInput>
    /**
     * Filter which ReservaMesas to update
     */
    where?: ReservaMesaWhereInput
  }

  /**
   * ReservaMesa upsert
   */
  export type ReservaMesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservaMesa to update in case it exists.
     */
    where: ReservaMesaWhereUniqueInput
    /**
     * In case the ReservaMesa found by the `where` argument doesn't exist, create a new ReservaMesa with this data.
     */
    create: XOR<ReservaMesaCreateInput, ReservaMesaUncheckedCreateInput>
    /**
     * In case the ReservaMesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaMesaUpdateInput, ReservaMesaUncheckedUpdateInput>
  }

  /**
   * ReservaMesa delete
   */
  export type ReservaMesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
    /**
     * Filter which ReservaMesa to delete.
     */
    where: ReservaMesaWhereUniqueInput
  }

  /**
   * ReservaMesa deleteMany
   */
  export type ReservaMesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservaMesas to delete
     */
    where?: ReservaMesaWhereInput
  }

  /**
   * ReservaMesa.promocion
   */
  export type ReservaMesa$promocionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocion
     */
    select?: PromocionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocionInclude<ExtArgs> | null
    where?: PromocionWhereInput
  }

  /**
   * ReservaMesa.resena
   */
  export type ReservaMesa$resenaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    where?: ResenaMesaWhereInput
  }

  /**
   * ReservaMesa without action
   */
  export type ReservaMesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaMesa
     */
    select?: ReservaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaMesaInclude<ExtArgs> | null
  }


  /**
   * Model ResenaMesa
   */

  export type AggregateResenaMesa = {
    _count: ResenaMesaCountAggregateOutputType | null
    _avg: ResenaMesaAvgAggregateOutputType | null
    _sum: ResenaMesaSumAggregateOutputType | null
    _min: ResenaMesaMinAggregateOutputType | null
    _max: ResenaMesaMaxAggregateOutputType | null
  }

  export type ResenaMesaAvgAggregateOutputType = {
    rating: number | null
  }

  export type ResenaMesaSumAggregateOutputType = {
    rating: number | null
  }

  export type ResenaMesaMinAggregateOutputType = {
    id: string | null
    reservaId: string | null
    clienteId: string | null
    rating: number | null
    comentario: string | null
    creadoEn: Date | null
  }

  export type ResenaMesaMaxAggregateOutputType = {
    id: string | null
    reservaId: string | null
    clienteId: string | null
    rating: number | null
    comentario: string | null
    creadoEn: Date | null
  }

  export type ResenaMesaCountAggregateOutputType = {
    id: number
    reservaId: number
    clienteId: number
    rating: number
    comentario: number
    creadoEn: number
    _all: number
  }


  export type ResenaMesaAvgAggregateInputType = {
    rating?: true
  }

  export type ResenaMesaSumAggregateInputType = {
    rating?: true
  }

  export type ResenaMesaMinAggregateInputType = {
    id?: true
    reservaId?: true
    clienteId?: true
    rating?: true
    comentario?: true
    creadoEn?: true
  }

  export type ResenaMesaMaxAggregateInputType = {
    id?: true
    reservaId?: true
    clienteId?: true
    rating?: true
    comentario?: true
    creadoEn?: true
  }

  export type ResenaMesaCountAggregateInputType = {
    id?: true
    reservaId?: true
    clienteId?: true
    rating?: true
    comentario?: true
    creadoEn?: true
    _all?: true
  }

  export type ResenaMesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResenaMesa to aggregate.
     */
    where?: ResenaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaMesas to fetch.
     */
    orderBy?: ResenaMesaOrderByWithRelationInput | ResenaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResenaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaMesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResenaMesas
    **/
    _count?: true | ResenaMesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResenaMesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResenaMesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResenaMesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResenaMesaMaxAggregateInputType
  }

  export type GetResenaMesaAggregateType<T extends ResenaMesaAggregateArgs> = {
        [P in keyof T & keyof AggregateResenaMesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResenaMesa[P]>
      : GetScalarType<T[P], AggregateResenaMesa[P]>
  }




  export type ResenaMesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaMesaWhereInput
    orderBy?: ResenaMesaOrderByWithAggregationInput | ResenaMesaOrderByWithAggregationInput[]
    by: ResenaMesaScalarFieldEnum[] | ResenaMesaScalarFieldEnum
    having?: ResenaMesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResenaMesaCountAggregateInputType | true
    _avg?: ResenaMesaAvgAggregateInputType
    _sum?: ResenaMesaSumAggregateInputType
    _min?: ResenaMesaMinAggregateInputType
    _max?: ResenaMesaMaxAggregateInputType
  }

  export type ResenaMesaGroupByOutputType = {
    id: string
    reservaId: string
    clienteId: string
    rating: number
    comentario: string | null
    creadoEn: Date
    _count: ResenaMesaCountAggregateOutputType | null
    _avg: ResenaMesaAvgAggregateOutputType | null
    _sum: ResenaMesaSumAggregateOutputType | null
    _min: ResenaMesaMinAggregateOutputType | null
    _max: ResenaMesaMaxAggregateOutputType | null
  }

  type GetResenaMesaGroupByPayload<T extends ResenaMesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResenaMesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResenaMesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResenaMesaGroupByOutputType[P]>
            : GetScalarType<T[P], ResenaMesaGroupByOutputType[P]>
        }
      >
    >


  export type ResenaMesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    clienteId?: boolean
    rating?: boolean
    comentario?: boolean
    creadoEn?: boolean
    reserva?: boolean | ReservaMesaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenaMesa"]>

  export type ResenaMesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    clienteId?: boolean
    rating?: boolean
    comentario?: boolean
    creadoEn?: boolean
    reserva?: boolean | ReservaMesaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenaMesa"]>

  export type ResenaMesaSelectScalar = {
    id?: boolean
    reservaId?: boolean
    clienteId?: boolean
    rating?: boolean
    comentario?: boolean
    creadoEn?: boolean
  }

  export type ResenaMesaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaMesaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResenaMesaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaMesaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ResenaMesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResenaMesa"
    objects: {
      reserva: Prisma.$ReservaMesaPayload<ExtArgs>
      cliente: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservaId: string
      clienteId: string
      rating: number
      comentario: string | null
      creadoEn: Date
    }, ExtArgs["result"]["resenaMesa"]>
    composites: {}
  }

  type ResenaMesaGetPayload<S extends boolean | null | undefined | ResenaMesaDefaultArgs> = $Result.GetResult<Prisma.$ResenaMesaPayload, S>

  type ResenaMesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResenaMesaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResenaMesaCountAggregateInputType | true
    }

  export interface ResenaMesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResenaMesa'], meta: { name: 'ResenaMesa' } }
    /**
     * Find zero or one ResenaMesa that matches the filter.
     * @param {ResenaMesaFindUniqueArgs} args - Arguments to find a ResenaMesa
     * @example
     * // Get one ResenaMesa
     * const resenaMesa = await prisma.resenaMesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResenaMesaFindUniqueArgs>(args: SelectSubset<T, ResenaMesaFindUniqueArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResenaMesa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResenaMesaFindUniqueOrThrowArgs} args - Arguments to find a ResenaMesa
     * @example
     * // Get one ResenaMesa
     * const resenaMesa = await prisma.resenaMesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResenaMesaFindUniqueOrThrowArgs>(args: SelectSubset<T, ResenaMesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResenaMesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaFindFirstArgs} args - Arguments to find a ResenaMesa
     * @example
     * // Get one ResenaMesa
     * const resenaMesa = await prisma.resenaMesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResenaMesaFindFirstArgs>(args?: SelectSubset<T, ResenaMesaFindFirstArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResenaMesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaFindFirstOrThrowArgs} args - Arguments to find a ResenaMesa
     * @example
     * // Get one ResenaMesa
     * const resenaMesa = await prisma.resenaMesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResenaMesaFindFirstOrThrowArgs>(args?: SelectSubset<T, ResenaMesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResenaMesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResenaMesas
     * const resenaMesas = await prisma.resenaMesa.findMany()
     * 
     * // Get first 10 ResenaMesas
     * const resenaMesas = await prisma.resenaMesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resenaMesaWithIdOnly = await prisma.resenaMesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResenaMesaFindManyArgs>(args?: SelectSubset<T, ResenaMesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResenaMesa.
     * @param {ResenaMesaCreateArgs} args - Arguments to create a ResenaMesa.
     * @example
     * // Create one ResenaMesa
     * const ResenaMesa = await prisma.resenaMesa.create({
     *   data: {
     *     // ... data to create a ResenaMesa
     *   }
     * })
     * 
     */
    create<T extends ResenaMesaCreateArgs>(args: SelectSubset<T, ResenaMesaCreateArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResenaMesas.
     * @param {ResenaMesaCreateManyArgs} args - Arguments to create many ResenaMesas.
     * @example
     * // Create many ResenaMesas
     * const resenaMesa = await prisma.resenaMesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResenaMesaCreateManyArgs>(args?: SelectSubset<T, ResenaMesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResenaMesas and returns the data saved in the database.
     * @param {ResenaMesaCreateManyAndReturnArgs} args - Arguments to create many ResenaMesas.
     * @example
     * // Create many ResenaMesas
     * const resenaMesa = await prisma.resenaMesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResenaMesas and only return the `id`
     * const resenaMesaWithIdOnly = await prisma.resenaMesa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResenaMesaCreateManyAndReturnArgs>(args?: SelectSubset<T, ResenaMesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResenaMesa.
     * @param {ResenaMesaDeleteArgs} args - Arguments to delete one ResenaMesa.
     * @example
     * // Delete one ResenaMesa
     * const ResenaMesa = await prisma.resenaMesa.delete({
     *   where: {
     *     // ... filter to delete one ResenaMesa
     *   }
     * })
     * 
     */
    delete<T extends ResenaMesaDeleteArgs>(args: SelectSubset<T, ResenaMesaDeleteArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResenaMesa.
     * @param {ResenaMesaUpdateArgs} args - Arguments to update one ResenaMesa.
     * @example
     * // Update one ResenaMesa
     * const resenaMesa = await prisma.resenaMesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResenaMesaUpdateArgs>(args: SelectSubset<T, ResenaMesaUpdateArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResenaMesas.
     * @param {ResenaMesaDeleteManyArgs} args - Arguments to filter ResenaMesas to delete.
     * @example
     * // Delete a few ResenaMesas
     * const { count } = await prisma.resenaMesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResenaMesaDeleteManyArgs>(args?: SelectSubset<T, ResenaMesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResenaMesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResenaMesas
     * const resenaMesa = await prisma.resenaMesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResenaMesaUpdateManyArgs>(args: SelectSubset<T, ResenaMesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResenaMesa.
     * @param {ResenaMesaUpsertArgs} args - Arguments to update or create a ResenaMesa.
     * @example
     * // Update or create a ResenaMesa
     * const resenaMesa = await prisma.resenaMesa.upsert({
     *   create: {
     *     // ... data to create a ResenaMesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResenaMesa we want to update
     *   }
     * })
     */
    upsert<T extends ResenaMesaUpsertArgs>(args: SelectSubset<T, ResenaMesaUpsertArgs<ExtArgs>>): Prisma__ResenaMesaClient<$Result.GetResult<Prisma.$ResenaMesaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResenaMesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaCountArgs} args - Arguments to filter ResenaMesas to count.
     * @example
     * // Count the number of ResenaMesas
     * const count = await prisma.resenaMesa.count({
     *   where: {
     *     // ... the filter for the ResenaMesas we want to count
     *   }
     * })
    **/
    count<T extends ResenaMesaCountArgs>(
      args?: Subset<T, ResenaMesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResenaMesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResenaMesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResenaMesaAggregateArgs>(args: Subset<T, ResenaMesaAggregateArgs>): Prisma.PrismaPromise<GetResenaMesaAggregateType<T>>

    /**
     * Group by ResenaMesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaMesaGroupByArgs} args - Group by arguments.
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
      T extends ResenaMesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResenaMesaGroupByArgs['orderBy'] }
        : { orderBy?: ResenaMesaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResenaMesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResenaMesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResenaMesa model
   */
  readonly fields: ResenaMesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResenaMesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResenaMesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends ReservaMesaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservaMesaDefaultArgs<ExtArgs>>): Prisma__ReservaMesaClient<$Result.GetResult<Prisma.$ReservaMesaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResenaMesa model
   */ 
  interface ResenaMesaFieldRefs {
    readonly id: FieldRef<"ResenaMesa", 'String'>
    readonly reservaId: FieldRef<"ResenaMesa", 'String'>
    readonly clienteId: FieldRef<"ResenaMesa", 'String'>
    readonly rating: FieldRef<"ResenaMesa", 'Int'>
    readonly comentario: FieldRef<"ResenaMesa", 'String'>
    readonly creadoEn: FieldRef<"ResenaMesa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResenaMesa findUnique
   */
  export type ResenaMesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaMesa to fetch.
     */
    where: ResenaMesaWhereUniqueInput
  }

  /**
   * ResenaMesa findUniqueOrThrow
   */
  export type ResenaMesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaMesa to fetch.
     */
    where: ResenaMesaWhereUniqueInput
  }

  /**
   * ResenaMesa findFirst
   */
  export type ResenaMesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaMesa to fetch.
     */
    where?: ResenaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaMesas to fetch.
     */
    orderBy?: ResenaMesaOrderByWithRelationInput | ResenaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResenaMesas.
     */
    cursor?: ResenaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaMesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResenaMesas.
     */
    distinct?: ResenaMesaScalarFieldEnum | ResenaMesaScalarFieldEnum[]
  }

  /**
   * ResenaMesa findFirstOrThrow
   */
  export type ResenaMesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaMesa to fetch.
     */
    where?: ResenaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaMesas to fetch.
     */
    orderBy?: ResenaMesaOrderByWithRelationInput | ResenaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResenaMesas.
     */
    cursor?: ResenaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaMesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResenaMesas.
     */
    distinct?: ResenaMesaScalarFieldEnum | ResenaMesaScalarFieldEnum[]
  }

  /**
   * ResenaMesa findMany
   */
  export type ResenaMesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaMesas to fetch.
     */
    where?: ResenaMesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaMesas to fetch.
     */
    orderBy?: ResenaMesaOrderByWithRelationInput | ResenaMesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResenaMesas.
     */
    cursor?: ResenaMesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaMesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaMesas.
     */
    skip?: number
    distinct?: ResenaMesaScalarFieldEnum | ResenaMesaScalarFieldEnum[]
  }

  /**
   * ResenaMesa create
   */
  export type ResenaMesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * The data needed to create a ResenaMesa.
     */
    data: XOR<ResenaMesaCreateInput, ResenaMesaUncheckedCreateInput>
  }

  /**
   * ResenaMesa createMany
   */
  export type ResenaMesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResenaMesas.
     */
    data: ResenaMesaCreateManyInput | ResenaMesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResenaMesa createManyAndReturn
   */
  export type ResenaMesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResenaMesas.
     */
    data: ResenaMesaCreateManyInput | ResenaMesaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResenaMesa update
   */
  export type ResenaMesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * The data needed to update a ResenaMesa.
     */
    data: XOR<ResenaMesaUpdateInput, ResenaMesaUncheckedUpdateInput>
    /**
     * Choose, which ResenaMesa to update.
     */
    where: ResenaMesaWhereUniqueInput
  }

  /**
   * ResenaMesa updateMany
   */
  export type ResenaMesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResenaMesas.
     */
    data: XOR<ResenaMesaUpdateManyMutationInput, ResenaMesaUncheckedUpdateManyInput>
    /**
     * Filter which ResenaMesas to update
     */
    where?: ResenaMesaWhereInput
  }

  /**
   * ResenaMesa upsert
   */
  export type ResenaMesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * The filter to search for the ResenaMesa to update in case it exists.
     */
    where: ResenaMesaWhereUniqueInput
    /**
     * In case the ResenaMesa found by the `where` argument doesn't exist, create a new ResenaMesa with this data.
     */
    create: XOR<ResenaMesaCreateInput, ResenaMesaUncheckedCreateInput>
    /**
     * In case the ResenaMesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResenaMesaUpdateInput, ResenaMesaUncheckedUpdateInput>
  }

  /**
   * ResenaMesa delete
   */
  export type ResenaMesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
    /**
     * Filter which ResenaMesa to delete.
     */
    where: ResenaMesaWhereUniqueInput
  }

  /**
   * ResenaMesa deleteMany
   */
  export type ResenaMesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResenaMesas to delete
     */
    where?: ResenaMesaWhereInput
  }

  /**
   * ResenaMesa without action
   */
  export type ResenaMesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaMesa
     */
    select?: ResenaMesaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaMesaInclude<ExtArgs> | null
  }


  /**
   * Model BolsaSorpresaPlantilla
   */

  export type AggregateBolsaSorpresaPlantilla = {
    _count: BolsaSorpresaPlantillaCountAggregateOutputType | null
    _avg: BolsaSorpresaPlantillaAvgAggregateOutputType | null
    _sum: BolsaSorpresaPlantillaSumAggregateOutputType | null
    _min: BolsaSorpresaPlantillaMinAggregateOutputType | null
    _max: BolsaSorpresaPlantillaMaxAggregateOutputType | null
  }

  export type BolsaSorpresaPlantillaAvgAggregateOutputType = {
    precio: number | null
    valorEstimado: number | null
  }

  export type BolsaSorpresaPlantillaSumAggregateOutputType = {
    precio: number | null
    valorEstimado: number | null
  }

  export type BolsaSorpresaPlantillaMinAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    valorEstimado: number | null
    condiciones: string | null
    politicaReembolso: string | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type BolsaSorpresaPlantillaMaxAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    valorEstimado: number | null
    condiciones: string | null
    politicaReembolso: string | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type BolsaSorpresaPlantillaCountAggregateOutputType = {
    id: number
    restauranteId: number
    nombre: number
    descripcion: number
    precio: number
    valorEstimado: number
    etiquetasDieta: number
    tipComida: number
    condiciones: number
    politicaReembolso: number
    activa: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type BolsaSorpresaPlantillaAvgAggregateInputType = {
    precio?: true
    valorEstimado?: true
  }

  export type BolsaSorpresaPlantillaSumAggregateInputType = {
    precio?: true
    valorEstimado?: true
  }

  export type BolsaSorpresaPlantillaMinAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    descripcion?: true
    precio?: true
    valorEstimado?: true
    condiciones?: true
    politicaReembolso?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type BolsaSorpresaPlantillaMaxAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    descripcion?: true
    precio?: true
    valorEstimado?: true
    condiciones?: true
    politicaReembolso?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type BolsaSorpresaPlantillaCountAggregateInputType = {
    id?: true
    restauranteId?: true
    nombre?: true
    descripcion?: true
    precio?: true
    valorEstimado?: true
    etiquetasDieta?: true
    tipComida?: true
    condiciones?: true
    politicaReembolso?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type BolsaSorpresaPlantillaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BolsaSorpresaPlantilla to aggregate.
     */
    where?: BolsaSorpresaPlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolsaSorpresaPlantillas to fetch.
     */
    orderBy?: BolsaSorpresaPlantillaOrderByWithRelationInput | BolsaSorpresaPlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BolsaSorpresaPlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolsaSorpresaPlantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolsaSorpresaPlantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BolsaSorpresaPlantillas
    **/
    _count?: true | BolsaSorpresaPlantillaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BolsaSorpresaPlantillaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BolsaSorpresaPlantillaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BolsaSorpresaPlantillaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BolsaSorpresaPlantillaMaxAggregateInputType
  }

  export type GetBolsaSorpresaPlantillaAggregateType<T extends BolsaSorpresaPlantillaAggregateArgs> = {
        [P in keyof T & keyof AggregateBolsaSorpresaPlantilla]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBolsaSorpresaPlantilla[P]>
      : GetScalarType<T[P], AggregateBolsaSorpresaPlantilla[P]>
  }




  export type BolsaSorpresaPlantillaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BolsaSorpresaPlantillaWhereInput
    orderBy?: BolsaSorpresaPlantillaOrderByWithAggregationInput | BolsaSorpresaPlantillaOrderByWithAggregationInput[]
    by: BolsaSorpresaPlantillaScalarFieldEnum[] | BolsaSorpresaPlantillaScalarFieldEnum
    having?: BolsaSorpresaPlantillaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BolsaSorpresaPlantillaCountAggregateInputType | true
    _avg?: BolsaSorpresaPlantillaAvgAggregateInputType
    _sum?: BolsaSorpresaPlantillaSumAggregateInputType
    _min?: BolsaSorpresaPlantillaMinAggregateInputType
    _max?: BolsaSorpresaPlantillaMaxAggregateInputType
  }

  export type BolsaSorpresaPlantillaGroupByOutputType = {
    id: string
    restauranteId: string
    nombre: string
    descripcion: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta: string[]
    tipComida: string[]
    condiciones: string | null
    politicaReembolso: string | null
    activa: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: BolsaSorpresaPlantillaCountAggregateOutputType | null
    _avg: BolsaSorpresaPlantillaAvgAggregateOutputType | null
    _sum: BolsaSorpresaPlantillaSumAggregateOutputType | null
    _min: BolsaSorpresaPlantillaMinAggregateOutputType | null
    _max: BolsaSorpresaPlantillaMaxAggregateOutputType | null
  }

  type GetBolsaSorpresaPlantillaGroupByPayload<T extends BolsaSorpresaPlantillaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BolsaSorpresaPlantillaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BolsaSorpresaPlantillaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BolsaSorpresaPlantillaGroupByOutputType[P]>
            : GetScalarType<T[P], BolsaSorpresaPlantillaGroupByOutputType[P]>
        }
      >
    >


  export type BolsaSorpresaPlantillaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    valorEstimado?: boolean
    etiquetasDieta?: boolean
    tipComida?: boolean
    condiciones?: boolean
    politicaReembolso?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    publicaciones?: boolean | BolsaSorpresaPlantilla$publicacionesArgs<ExtArgs>
    _count?: boolean | BolsaSorpresaPlantillaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bolsaSorpresaPlantilla"]>

  export type BolsaSorpresaPlantillaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    valorEstimado?: boolean
    etiquetasDieta?: boolean
    tipComida?: boolean
    condiciones?: boolean
    politicaReembolso?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bolsaSorpresaPlantilla"]>

  export type BolsaSorpresaPlantillaSelectScalar = {
    id?: boolean
    restauranteId?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    valorEstimado?: boolean
    etiquetasDieta?: boolean
    tipComida?: boolean
    condiciones?: boolean
    politicaReembolso?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type BolsaSorpresaPlantillaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    publicaciones?: boolean | BolsaSorpresaPlantilla$publicacionesArgs<ExtArgs>
    _count?: boolean | BolsaSorpresaPlantillaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BolsaSorpresaPlantillaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $BolsaSorpresaPlantillaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BolsaSorpresaPlantilla"
    objects: {
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
      publicaciones: Prisma.$PublicacionBolsaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restauranteId: string
      nombre: string
      descripcion: string | null
      precio: number
      valorEstimado: number
      etiquetasDieta: string[]
      tipComida: string[]
      condiciones: string | null
      politicaReembolso: string | null
      activa: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["bolsaSorpresaPlantilla"]>
    composites: {}
  }

  type BolsaSorpresaPlantillaGetPayload<S extends boolean | null | undefined | BolsaSorpresaPlantillaDefaultArgs> = $Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload, S>

  type BolsaSorpresaPlantillaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BolsaSorpresaPlantillaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BolsaSorpresaPlantillaCountAggregateInputType | true
    }

  export interface BolsaSorpresaPlantillaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BolsaSorpresaPlantilla'], meta: { name: 'BolsaSorpresaPlantilla' } }
    /**
     * Find zero or one BolsaSorpresaPlantilla that matches the filter.
     * @param {BolsaSorpresaPlantillaFindUniqueArgs} args - Arguments to find a BolsaSorpresaPlantilla
     * @example
     * // Get one BolsaSorpresaPlantilla
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BolsaSorpresaPlantillaFindUniqueArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaFindUniqueArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BolsaSorpresaPlantilla that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BolsaSorpresaPlantillaFindUniqueOrThrowArgs} args - Arguments to find a BolsaSorpresaPlantilla
     * @example
     * // Get one BolsaSorpresaPlantilla
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BolsaSorpresaPlantillaFindUniqueOrThrowArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BolsaSorpresaPlantilla that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaFindFirstArgs} args - Arguments to find a BolsaSorpresaPlantilla
     * @example
     * // Get one BolsaSorpresaPlantilla
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BolsaSorpresaPlantillaFindFirstArgs>(args?: SelectSubset<T, BolsaSorpresaPlantillaFindFirstArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BolsaSorpresaPlantilla that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaFindFirstOrThrowArgs} args - Arguments to find a BolsaSorpresaPlantilla
     * @example
     * // Get one BolsaSorpresaPlantilla
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BolsaSorpresaPlantillaFindFirstOrThrowArgs>(args?: SelectSubset<T, BolsaSorpresaPlantillaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BolsaSorpresaPlantillas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BolsaSorpresaPlantillas
     * const bolsaSorpresaPlantillas = await prisma.bolsaSorpresaPlantilla.findMany()
     * 
     * // Get first 10 BolsaSorpresaPlantillas
     * const bolsaSorpresaPlantillas = await prisma.bolsaSorpresaPlantilla.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bolsaSorpresaPlantillaWithIdOnly = await prisma.bolsaSorpresaPlantilla.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BolsaSorpresaPlantillaFindManyArgs>(args?: SelectSubset<T, BolsaSorpresaPlantillaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BolsaSorpresaPlantilla.
     * @param {BolsaSorpresaPlantillaCreateArgs} args - Arguments to create a BolsaSorpresaPlantilla.
     * @example
     * // Create one BolsaSorpresaPlantilla
     * const BolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.create({
     *   data: {
     *     // ... data to create a BolsaSorpresaPlantilla
     *   }
     * })
     * 
     */
    create<T extends BolsaSorpresaPlantillaCreateArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaCreateArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BolsaSorpresaPlantillas.
     * @param {BolsaSorpresaPlantillaCreateManyArgs} args - Arguments to create many BolsaSorpresaPlantillas.
     * @example
     * // Create many BolsaSorpresaPlantillas
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BolsaSorpresaPlantillaCreateManyArgs>(args?: SelectSubset<T, BolsaSorpresaPlantillaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BolsaSorpresaPlantillas and returns the data saved in the database.
     * @param {BolsaSorpresaPlantillaCreateManyAndReturnArgs} args - Arguments to create many BolsaSorpresaPlantillas.
     * @example
     * // Create many BolsaSorpresaPlantillas
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BolsaSorpresaPlantillas and only return the `id`
     * const bolsaSorpresaPlantillaWithIdOnly = await prisma.bolsaSorpresaPlantilla.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BolsaSorpresaPlantillaCreateManyAndReturnArgs>(args?: SelectSubset<T, BolsaSorpresaPlantillaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BolsaSorpresaPlantilla.
     * @param {BolsaSorpresaPlantillaDeleteArgs} args - Arguments to delete one BolsaSorpresaPlantilla.
     * @example
     * // Delete one BolsaSorpresaPlantilla
     * const BolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.delete({
     *   where: {
     *     // ... filter to delete one BolsaSorpresaPlantilla
     *   }
     * })
     * 
     */
    delete<T extends BolsaSorpresaPlantillaDeleteArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaDeleteArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BolsaSorpresaPlantilla.
     * @param {BolsaSorpresaPlantillaUpdateArgs} args - Arguments to update one BolsaSorpresaPlantilla.
     * @example
     * // Update one BolsaSorpresaPlantilla
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BolsaSorpresaPlantillaUpdateArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaUpdateArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BolsaSorpresaPlantillas.
     * @param {BolsaSorpresaPlantillaDeleteManyArgs} args - Arguments to filter BolsaSorpresaPlantillas to delete.
     * @example
     * // Delete a few BolsaSorpresaPlantillas
     * const { count } = await prisma.bolsaSorpresaPlantilla.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BolsaSorpresaPlantillaDeleteManyArgs>(args?: SelectSubset<T, BolsaSorpresaPlantillaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BolsaSorpresaPlantillas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BolsaSorpresaPlantillas
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BolsaSorpresaPlantillaUpdateManyArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BolsaSorpresaPlantilla.
     * @param {BolsaSorpresaPlantillaUpsertArgs} args - Arguments to update or create a BolsaSorpresaPlantilla.
     * @example
     * // Update or create a BolsaSorpresaPlantilla
     * const bolsaSorpresaPlantilla = await prisma.bolsaSorpresaPlantilla.upsert({
     *   create: {
     *     // ... data to create a BolsaSorpresaPlantilla
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BolsaSorpresaPlantilla we want to update
     *   }
     * })
     */
    upsert<T extends BolsaSorpresaPlantillaUpsertArgs>(args: SelectSubset<T, BolsaSorpresaPlantillaUpsertArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BolsaSorpresaPlantillas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaCountArgs} args - Arguments to filter BolsaSorpresaPlantillas to count.
     * @example
     * // Count the number of BolsaSorpresaPlantillas
     * const count = await prisma.bolsaSorpresaPlantilla.count({
     *   where: {
     *     // ... the filter for the BolsaSorpresaPlantillas we want to count
     *   }
     * })
    **/
    count<T extends BolsaSorpresaPlantillaCountArgs>(
      args?: Subset<T, BolsaSorpresaPlantillaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BolsaSorpresaPlantillaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BolsaSorpresaPlantilla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BolsaSorpresaPlantillaAggregateArgs>(args: Subset<T, BolsaSorpresaPlantillaAggregateArgs>): Prisma.PrismaPromise<GetBolsaSorpresaPlantillaAggregateType<T>>

    /**
     * Group by BolsaSorpresaPlantilla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BolsaSorpresaPlantillaGroupByArgs} args - Group by arguments.
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
      T extends BolsaSorpresaPlantillaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BolsaSorpresaPlantillaGroupByArgs['orderBy'] }
        : { orderBy?: BolsaSorpresaPlantillaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BolsaSorpresaPlantillaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBolsaSorpresaPlantillaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BolsaSorpresaPlantilla model
   */
  readonly fields: BolsaSorpresaPlantillaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BolsaSorpresaPlantilla.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BolsaSorpresaPlantillaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    publicaciones<T extends BolsaSorpresaPlantilla$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, BolsaSorpresaPlantilla$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BolsaSorpresaPlantilla model
   */ 
  interface BolsaSorpresaPlantillaFieldRefs {
    readonly id: FieldRef<"BolsaSorpresaPlantilla", 'String'>
    readonly restauranteId: FieldRef<"BolsaSorpresaPlantilla", 'String'>
    readonly nombre: FieldRef<"BolsaSorpresaPlantilla", 'String'>
    readonly descripcion: FieldRef<"BolsaSorpresaPlantilla", 'String'>
    readonly precio: FieldRef<"BolsaSorpresaPlantilla", 'Float'>
    readonly valorEstimado: FieldRef<"BolsaSorpresaPlantilla", 'Float'>
    readonly etiquetasDieta: FieldRef<"BolsaSorpresaPlantilla", 'String[]'>
    readonly tipComida: FieldRef<"BolsaSorpresaPlantilla", 'String[]'>
    readonly condiciones: FieldRef<"BolsaSorpresaPlantilla", 'String'>
    readonly politicaReembolso: FieldRef<"BolsaSorpresaPlantilla", 'String'>
    readonly activa: FieldRef<"BolsaSorpresaPlantilla", 'Boolean'>
    readonly creadoEn: FieldRef<"BolsaSorpresaPlantilla", 'DateTime'>
    readonly actualizadoEn: FieldRef<"BolsaSorpresaPlantilla", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BolsaSorpresaPlantilla findUnique
   */
  export type BolsaSorpresaPlantillaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * Filter, which BolsaSorpresaPlantilla to fetch.
     */
    where: BolsaSorpresaPlantillaWhereUniqueInput
  }

  /**
   * BolsaSorpresaPlantilla findUniqueOrThrow
   */
  export type BolsaSorpresaPlantillaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * Filter, which BolsaSorpresaPlantilla to fetch.
     */
    where: BolsaSorpresaPlantillaWhereUniqueInput
  }

  /**
   * BolsaSorpresaPlantilla findFirst
   */
  export type BolsaSorpresaPlantillaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * Filter, which BolsaSorpresaPlantilla to fetch.
     */
    where?: BolsaSorpresaPlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolsaSorpresaPlantillas to fetch.
     */
    orderBy?: BolsaSorpresaPlantillaOrderByWithRelationInput | BolsaSorpresaPlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BolsaSorpresaPlantillas.
     */
    cursor?: BolsaSorpresaPlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolsaSorpresaPlantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolsaSorpresaPlantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BolsaSorpresaPlantillas.
     */
    distinct?: BolsaSorpresaPlantillaScalarFieldEnum | BolsaSorpresaPlantillaScalarFieldEnum[]
  }

  /**
   * BolsaSorpresaPlantilla findFirstOrThrow
   */
  export type BolsaSorpresaPlantillaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * Filter, which BolsaSorpresaPlantilla to fetch.
     */
    where?: BolsaSorpresaPlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolsaSorpresaPlantillas to fetch.
     */
    orderBy?: BolsaSorpresaPlantillaOrderByWithRelationInput | BolsaSorpresaPlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BolsaSorpresaPlantillas.
     */
    cursor?: BolsaSorpresaPlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolsaSorpresaPlantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolsaSorpresaPlantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BolsaSorpresaPlantillas.
     */
    distinct?: BolsaSorpresaPlantillaScalarFieldEnum | BolsaSorpresaPlantillaScalarFieldEnum[]
  }

  /**
   * BolsaSorpresaPlantilla findMany
   */
  export type BolsaSorpresaPlantillaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * Filter, which BolsaSorpresaPlantillas to fetch.
     */
    where?: BolsaSorpresaPlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BolsaSorpresaPlantillas to fetch.
     */
    orderBy?: BolsaSorpresaPlantillaOrderByWithRelationInput | BolsaSorpresaPlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BolsaSorpresaPlantillas.
     */
    cursor?: BolsaSorpresaPlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BolsaSorpresaPlantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BolsaSorpresaPlantillas.
     */
    skip?: number
    distinct?: BolsaSorpresaPlantillaScalarFieldEnum | BolsaSorpresaPlantillaScalarFieldEnum[]
  }

  /**
   * BolsaSorpresaPlantilla create
   */
  export type BolsaSorpresaPlantillaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * The data needed to create a BolsaSorpresaPlantilla.
     */
    data: XOR<BolsaSorpresaPlantillaCreateInput, BolsaSorpresaPlantillaUncheckedCreateInput>
  }

  /**
   * BolsaSorpresaPlantilla createMany
   */
  export type BolsaSorpresaPlantillaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BolsaSorpresaPlantillas.
     */
    data: BolsaSorpresaPlantillaCreateManyInput | BolsaSorpresaPlantillaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BolsaSorpresaPlantilla createManyAndReturn
   */
  export type BolsaSorpresaPlantillaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BolsaSorpresaPlantillas.
     */
    data: BolsaSorpresaPlantillaCreateManyInput | BolsaSorpresaPlantillaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BolsaSorpresaPlantilla update
   */
  export type BolsaSorpresaPlantillaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * The data needed to update a BolsaSorpresaPlantilla.
     */
    data: XOR<BolsaSorpresaPlantillaUpdateInput, BolsaSorpresaPlantillaUncheckedUpdateInput>
    /**
     * Choose, which BolsaSorpresaPlantilla to update.
     */
    where: BolsaSorpresaPlantillaWhereUniqueInput
  }

  /**
   * BolsaSorpresaPlantilla updateMany
   */
  export type BolsaSorpresaPlantillaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BolsaSorpresaPlantillas.
     */
    data: XOR<BolsaSorpresaPlantillaUpdateManyMutationInput, BolsaSorpresaPlantillaUncheckedUpdateManyInput>
    /**
     * Filter which BolsaSorpresaPlantillas to update
     */
    where?: BolsaSorpresaPlantillaWhereInput
  }

  /**
   * BolsaSorpresaPlantilla upsert
   */
  export type BolsaSorpresaPlantillaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * The filter to search for the BolsaSorpresaPlantilla to update in case it exists.
     */
    where: BolsaSorpresaPlantillaWhereUniqueInput
    /**
     * In case the BolsaSorpresaPlantilla found by the `where` argument doesn't exist, create a new BolsaSorpresaPlantilla with this data.
     */
    create: XOR<BolsaSorpresaPlantillaCreateInput, BolsaSorpresaPlantillaUncheckedCreateInput>
    /**
     * In case the BolsaSorpresaPlantilla was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BolsaSorpresaPlantillaUpdateInput, BolsaSorpresaPlantillaUncheckedUpdateInput>
  }

  /**
   * BolsaSorpresaPlantilla delete
   */
  export type BolsaSorpresaPlantillaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
    /**
     * Filter which BolsaSorpresaPlantilla to delete.
     */
    where: BolsaSorpresaPlantillaWhereUniqueInput
  }

  /**
   * BolsaSorpresaPlantilla deleteMany
   */
  export type BolsaSorpresaPlantillaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BolsaSorpresaPlantillas to delete
     */
    where?: BolsaSorpresaPlantillaWhereInput
  }

  /**
   * BolsaSorpresaPlantilla.publicaciones
   */
  export type BolsaSorpresaPlantilla$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    where?: PublicacionBolsaWhereInput
    orderBy?: PublicacionBolsaOrderByWithRelationInput | PublicacionBolsaOrderByWithRelationInput[]
    cursor?: PublicacionBolsaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionBolsaScalarFieldEnum | PublicacionBolsaScalarFieldEnum[]
  }

  /**
   * BolsaSorpresaPlantilla without action
   */
  export type BolsaSorpresaPlantillaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BolsaSorpresaPlantilla
     */
    select?: BolsaSorpresaPlantillaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BolsaSorpresaPlantillaInclude<ExtArgs> | null
  }


  /**
   * Model PublicacionBolsa
   */

  export type AggregatePublicacionBolsa = {
    _count: PublicacionBolsaCountAggregateOutputType | null
    _avg: PublicacionBolsaAvgAggregateOutputType | null
    _sum: PublicacionBolsaSumAggregateOutputType | null
    _min: PublicacionBolsaMinAggregateOutputType | null
    _max: PublicacionBolsaMaxAggregateOutputType | null
  }

  export type PublicacionBolsaAvgAggregateOutputType = {
    unidadesTotales: number | null
    unidadesVendidas: number | null
  }

  export type PublicacionBolsaSumAggregateOutputType = {
    unidadesTotales: number | null
    unidadesVendidas: number | null
  }

  export type PublicacionBolsaMinAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    plantillaId: string | null
    fecha: Date | null
    franjaInicio: string | null
    franjaFin: string | null
    unidadesTotales: number | null
    unidadesVendidas: number | null
    estado: $Enums.EstadoPublicacion | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PublicacionBolsaMaxAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    plantillaId: string | null
    fecha: Date | null
    franjaInicio: string | null
    franjaFin: string | null
    unidadesTotales: number | null
    unidadesVendidas: number | null
    estado: $Enums.EstadoPublicacion | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PublicacionBolsaCountAggregateOutputType = {
    id: number
    restauranteId: number
    plantillaId: number
    fecha: number
    franjaInicio: number
    franjaFin: number
    unidadesTotales: number
    unidadesVendidas: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type PublicacionBolsaAvgAggregateInputType = {
    unidadesTotales?: true
    unidadesVendidas?: true
  }

  export type PublicacionBolsaSumAggregateInputType = {
    unidadesTotales?: true
    unidadesVendidas?: true
  }

  export type PublicacionBolsaMinAggregateInputType = {
    id?: true
    restauranteId?: true
    plantillaId?: true
    fecha?: true
    franjaInicio?: true
    franjaFin?: true
    unidadesTotales?: true
    unidadesVendidas?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PublicacionBolsaMaxAggregateInputType = {
    id?: true
    restauranteId?: true
    plantillaId?: true
    fecha?: true
    franjaInicio?: true
    franjaFin?: true
    unidadesTotales?: true
    unidadesVendidas?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PublicacionBolsaCountAggregateInputType = {
    id?: true
    restauranteId?: true
    plantillaId?: true
    fecha?: true
    franjaInicio?: true
    franjaFin?: true
    unidadesTotales?: true
    unidadesVendidas?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type PublicacionBolsaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicacionBolsa to aggregate.
     */
    where?: PublicacionBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionBolsas to fetch.
     */
    orderBy?: PublicacionBolsaOrderByWithRelationInput | PublicacionBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacionBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicacionBolsas
    **/
    _count?: true | PublicacionBolsaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacionBolsaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacionBolsaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacionBolsaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacionBolsaMaxAggregateInputType
  }

  export type GetPublicacionBolsaAggregateType<T extends PublicacionBolsaAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacionBolsa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacionBolsa[P]>
      : GetScalarType<T[P], AggregatePublicacionBolsa[P]>
  }




  export type PublicacionBolsaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionBolsaWhereInput
    orderBy?: PublicacionBolsaOrderByWithAggregationInput | PublicacionBolsaOrderByWithAggregationInput[]
    by: PublicacionBolsaScalarFieldEnum[] | PublicacionBolsaScalarFieldEnum
    having?: PublicacionBolsaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacionBolsaCountAggregateInputType | true
    _avg?: PublicacionBolsaAvgAggregateInputType
    _sum?: PublicacionBolsaSumAggregateInputType
    _min?: PublicacionBolsaMinAggregateInputType
    _max?: PublicacionBolsaMaxAggregateInputType
  }

  export type PublicacionBolsaGroupByOutputType = {
    id: string
    restauranteId: string
    plantillaId: string
    fecha: Date
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas: number
    estado: $Enums.EstadoPublicacion
    creadoEn: Date
    actualizadoEn: Date
    _count: PublicacionBolsaCountAggregateOutputType | null
    _avg: PublicacionBolsaAvgAggregateOutputType | null
    _sum: PublicacionBolsaSumAggregateOutputType | null
    _min: PublicacionBolsaMinAggregateOutputType | null
    _max: PublicacionBolsaMaxAggregateOutputType | null
  }

  type GetPublicacionBolsaGroupByPayload<T extends PublicacionBolsaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacionBolsaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacionBolsaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacionBolsaGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacionBolsaGroupByOutputType[P]>
        }
      >
    >


  export type PublicacionBolsaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    plantillaId?: boolean
    fecha?: boolean
    franjaInicio?: boolean
    franjaFin?: boolean
    unidadesTotales?: boolean
    unidadesVendidas?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    plantilla?: boolean | BolsaSorpresaPlantillaDefaultArgs<ExtArgs>
    reservas?: boolean | PublicacionBolsa$reservasArgs<ExtArgs>
    _count?: boolean | PublicacionBolsaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacionBolsa"]>

  export type PublicacionBolsaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    plantillaId?: boolean
    fecha?: boolean
    franjaInicio?: boolean
    franjaFin?: boolean
    unidadesTotales?: boolean
    unidadesVendidas?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    plantilla?: boolean | BolsaSorpresaPlantillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacionBolsa"]>

  export type PublicacionBolsaSelectScalar = {
    id?: boolean
    restauranteId?: boolean
    plantillaId?: boolean
    fecha?: boolean
    franjaInicio?: boolean
    franjaFin?: boolean
    unidadesTotales?: boolean
    unidadesVendidas?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type PublicacionBolsaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    plantilla?: boolean | BolsaSorpresaPlantillaDefaultArgs<ExtArgs>
    reservas?: boolean | PublicacionBolsa$reservasArgs<ExtArgs>
    _count?: boolean | PublicacionBolsaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicacionBolsaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    plantilla?: boolean | BolsaSorpresaPlantillaDefaultArgs<ExtArgs>
  }

  export type $PublicacionBolsaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicacionBolsa"
    objects: {
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
      plantilla: Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>
      reservas: Prisma.$ReservaBolsaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restauranteId: string
      plantillaId: string
      fecha: Date
      franjaInicio: string
      franjaFin: string
      unidadesTotales: number
      unidadesVendidas: number
      estado: $Enums.EstadoPublicacion
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["publicacionBolsa"]>
    composites: {}
  }

  type PublicacionBolsaGetPayload<S extends boolean | null | undefined | PublicacionBolsaDefaultArgs> = $Result.GetResult<Prisma.$PublicacionBolsaPayload, S>

  type PublicacionBolsaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicacionBolsaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicacionBolsaCountAggregateInputType | true
    }

  export interface PublicacionBolsaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicacionBolsa'], meta: { name: 'PublicacionBolsa' } }
    /**
     * Find zero or one PublicacionBolsa that matches the filter.
     * @param {PublicacionBolsaFindUniqueArgs} args - Arguments to find a PublicacionBolsa
     * @example
     * // Get one PublicacionBolsa
     * const publicacionBolsa = await prisma.publicacionBolsa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacionBolsaFindUniqueArgs>(args: SelectSubset<T, PublicacionBolsaFindUniqueArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PublicacionBolsa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublicacionBolsaFindUniqueOrThrowArgs} args - Arguments to find a PublicacionBolsa
     * @example
     * // Get one PublicacionBolsa
     * const publicacionBolsa = await prisma.publicacionBolsa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacionBolsaFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacionBolsaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PublicacionBolsa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaFindFirstArgs} args - Arguments to find a PublicacionBolsa
     * @example
     * // Get one PublicacionBolsa
     * const publicacionBolsa = await prisma.publicacionBolsa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacionBolsaFindFirstArgs>(args?: SelectSubset<T, PublicacionBolsaFindFirstArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PublicacionBolsa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaFindFirstOrThrowArgs} args - Arguments to find a PublicacionBolsa
     * @example
     * // Get one PublicacionBolsa
     * const publicacionBolsa = await prisma.publicacionBolsa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacionBolsaFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacionBolsaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PublicacionBolsas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicacionBolsas
     * const publicacionBolsas = await prisma.publicacionBolsa.findMany()
     * 
     * // Get first 10 PublicacionBolsas
     * const publicacionBolsas = await prisma.publicacionBolsa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacionBolsaWithIdOnly = await prisma.publicacionBolsa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicacionBolsaFindManyArgs>(args?: SelectSubset<T, PublicacionBolsaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PublicacionBolsa.
     * @param {PublicacionBolsaCreateArgs} args - Arguments to create a PublicacionBolsa.
     * @example
     * // Create one PublicacionBolsa
     * const PublicacionBolsa = await prisma.publicacionBolsa.create({
     *   data: {
     *     // ... data to create a PublicacionBolsa
     *   }
     * })
     * 
     */
    create<T extends PublicacionBolsaCreateArgs>(args: SelectSubset<T, PublicacionBolsaCreateArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PublicacionBolsas.
     * @param {PublicacionBolsaCreateManyArgs} args - Arguments to create many PublicacionBolsas.
     * @example
     * // Create many PublicacionBolsas
     * const publicacionBolsa = await prisma.publicacionBolsa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacionBolsaCreateManyArgs>(args?: SelectSubset<T, PublicacionBolsaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicacionBolsas and returns the data saved in the database.
     * @param {PublicacionBolsaCreateManyAndReturnArgs} args - Arguments to create many PublicacionBolsas.
     * @example
     * // Create many PublicacionBolsas
     * const publicacionBolsa = await prisma.publicacionBolsa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicacionBolsas and only return the `id`
     * const publicacionBolsaWithIdOnly = await prisma.publicacionBolsa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacionBolsaCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacionBolsaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PublicacionBolsa.
     * @param {PublicacionBolsaDeleteArgs} args - Arguments to delete one PublicacionBolsa.
     * @example
     * // Delete one PublicacionBolsa
     * const PublicacionBolsa = await prisma.publicacionBolsa.delete({
     *   where: {
     *     // ... filter to delete one PublicacionBolsa
     *   }
     * })
     * 
     */
    delete<T extends PublicacionBolsaDeleteArgs>(args: SelectSubset<T, PublicacionBolsaDeleteArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PublicacionBolsa.
     * @param {PublicacionBolsaUpdateArgs} args - Arguments to update one PublicacionBolsa.
     * @example
     * // Update one PublicacionBolsa
     * const publicacionBolsa = await prisma.publicacionBolsa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacionBolsaUpdateArgs>(args: SelectSubset<T, PublicacionBolsaUpdateArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PublicacionBolsas.
     * @param {PublicacionBolsaDeleteManyArgs} args - Arguments to filter PublicacionBolsas to delete.
     * @example
     * // Delete a few PublicacionBolsas
     * const { count } = await prisma.publicacionBolsa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacionBolsaDeleteManyArgs>(args?: SelectSubset<T, PublicacionBolsaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicacionBolsas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicacionBolsas
     * const publicacionBolsa = await prisma.publicacionBolsa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacionBolsaUpdateManyArgs>(args: SelectSubset<T, PublicacionBolsaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicacionBolsa.
     * @param {PublicacionBolsaUpsertArgs} args - Arguments to update or create a PublicacionBolsa.
     * @example
     * // Update or create a PublicacionBolsa
     * const publicacionBolsa = await prisma.publicacionBolsa.upsert({
     *   create: {
     *     // ... data to create a PublicacionBolsa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicacionBolsa we want to update
     *   }
     * })
     */
    upsert<T extends PublicacionBolsaUpsertArgs>(args: SelectSubset<T, PublicacionBolsaUpsertArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PublicacionBolsas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaCountArgs} args - Arguments to filter PublicacionBolsas to count.
     * @example
     * // Count the number of PublicacionBolsas
     * const count = await prisma.publicacionBolsa.count({
     *   where: {
     *     // ... the filter for the PublicacionBolsas we want to count
     *   }
     * })
    **/
    count<T extends PublicacionBolsaCountArgs>(
      args?: Subset<T, PublicacionBolsaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacionBolsaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicacionBolsa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicacionBolsaAggregateArgs>(args: Subset<T, PublicacionBolsaAggregateArgs>): Prisma.PrismaPromise<GetPublicacionBolsaAggregateType<T>>

    /**
     * Group by PublicacionBolsa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionBolsaGroupByArgs} args - Group by arguments.
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
      T extends PublicacionBolsaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacionBolsaGroupByArgs['orderBy'] }
        : { orderBy?: PublicacionBolsaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicacionBolsaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacionBolsaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicacionBolsa model
   */
  readonly fields: PublicacionBolsaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicacionBolsa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacionBolsaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plantilla<T extends BolsaSorpresaPlantillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BolsaSorpresaPlantillaDefaultArgs<ExtArgs>>): Prisma__BolsaSorpresaPlantillaClient<$Result.GetResult<Prisma.$BolsaSorpresaPlantillaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservas<T extends PublicacionBolsa$reservasArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionBolsa$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicacionBolsa model
   */ 
  interface PublicacionBolsaFieldRefs {
    readonly id: FieldRef<"PublicacionBolsa", 'String'>
    readonly restauranteId: FieldRef<"PublicacionBolsa", 'String'>
    readonly plantillaId: FieldRef<"PublicacionBolsa", 'String'>
    readonly fecha: FieldRef<"PublicacionBolsa", 'DateTime'>
    readonly franjaInicio: FieldRef<"PublicacionBolsa", 'String'>
    readonly franjaFin: FieldRef<"PublicacionBolsa", 'String'>
    readonly unidadesTotales: FieldRef<"PublicacionBolsa", 'Int'>
    readonly unidadesVendidas: FieldRef<"PublicacionBolsa", 'Int'>
    readonly estado: FieldRef<"PublicacionBolsa", 'EstadoPublicacion'>
    readonly creadoEn: FieldRef<"PublicacionBolsa", 'DateTime'>
    readonly actualizadoEn: FieldRef<"PublicacionBolsa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicacionBolsa findUnique
   */
  export type PublicacionBolsaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionBolsa to fetch.
     */
    where: PublicacionBolsaWhereUniqueInput
  }

  /**
   * PublicacionBolsa findUniqueOrThrow
   */
  export type PublicacionBolsaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionBolsa to fetch.
     */
    where: PublicacionBolsaWhereUniqueInput
  }

  /**
   * PublicacionBolsa findFirst
   */
  export type PublicacionBolsaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionBolsa to fetch.
     */
    where?: PublicacionBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionBolsas to fetch.
     */
    orderBy?: PublicacionBolsaOrderByWithRelationInput | PublicacionBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicacionBolsas.
     */
    cursor?: PublicacionBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicacionBolsas.
     */
    distinct?: PublicacionBolsaScalarFieldEnum | PublicacionBolsaScalarFieldEnum[]
  }

  /**
   * PublicacionBolsa findFirstOrThrow
   */
  export type PublicacionBolsaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionBolsa to fetch.
     */
    where?: PublicacionBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionBolsas to fetch.
     */
    orderBy?: PublicacionBolsaOrderByWithRelationInput | PublicacionBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicacionBolsas.
     */
    cursor?: PublicacionBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicacionBolsas.
     */
    distinct?: PublicacionBolsaScalarFieldEnum | PublicacionBolsaScalarFieldEnum[]
  }

  /**
   * PublicacionBolsa findMany
   */
  export type PublicacionBolsaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * Filter, which PublicacionBolsas to fetch.
     */
    where?: PublicacionBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicacionBolsas to fetch.
     */
    orderBy?: PublicacionBolsaOrderByWithRelationInput | PublicacionBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicacionBolsas.
     */
    cursor?: PublicacionBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicacionBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicacionBolsas.
     */
    skip?: number
    distinct?: PublicacionBolsaScalarFieldEnum | PublicacionBolsaScalarFieldEnum[]
  }

  /**
   * PublicacionBolsa create
   */
  export type PublicacionBolsaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicacionBolsa.
     */
    data: XOR<PublicacionBolsaCreateInput, PublicacionBolsaUncheckedCreateInput>
  }

  /**
   * PublicacionBolsa createMany
   */
  export type PublicacionBolsaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicacionBolsas.
     */
    data: PublicacionBolsaCreateManyInput | PublicacionBolsaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicacionBolsa createManyAndReturn
   */
  export type PublicacionBolsaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PublicacionBolsas.
     */
    data: PublicacionBolsaCreateManyInput | PublicacionBolsaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicacionBolsa update
   */
  export type PublicacionBolsaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicacionBolsa.
     */
    data: XOR<PublicacionBolsaUpdateInput, PublicacionBolsaUncheckedUpdateInput>
    /**
     * Choose, which PublicacionBolsa to update.
     */
    where: PublicacionBolsaWhereUniqueInput
  }

  /**
   * PublicacionBolsa updateMany
   */
  export type PublicacionBolsaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicacionBolsas.
     */
    data: XOR<PublicacionBolsaUpdateManyMutationInput, PublicacionBolsaUncheckedUpdateManyInput>
    /**
     * Filter which PublicacionBolsas to update
     */
    where?: PublicacionBolsaWhereInput
  }

  /**
   * PublicacionBolsa upsert
   */
  export type PublicacionBolsaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicacionBolsa to update in case it exists.
     */
    where: PublicacionBolsaWhereUniqueInput
    /**
     * In case the PublicacionBolsa found by the `where` argument doesn't exist, create a new PublicacionBolsa with this data.
     */
    create: XOR<PublicacionBolsaCreateInput, PublicacionBolsaUncheckedCreateInput>
    /**
     * In case the PublicacionBolsa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacionBolsaUpdateInput, PublicacionBolsaUncheckedUpdateInput>
  }

  /**
   * PublicacionBolsa delete
   */
  export type PublicacionBolsaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
    /**
     * Filter which PublicacionBolsa to delete.
     */
    where: PublicacionBolsaWhereUniqueInput
  }

  /**
   * PublicacionBolsa deleteMany
   */
  export type PublicacionBolsaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicacionBolsas to delete
     */
    where?: PublicacionBolsaWhereInput
  }

  /**
   * PublicacionBolsa.reservas
   */
  export type PublicacionBolsa$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    where?: ReservaBolsaWhereInput
    orderBy?: ReservaBolsaOrderByWithRelationInput | ReservaBolsaOrderByWithRelationInput[]
    cursor?: ReservaBolsaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaBolsaScalarFieldEnum | ReservaBolsaScalarFieldEnum[]
  }

  /**
   * PublicacionBolsa without action
   */
  export type PublicacionBolsaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionBolsa
     */
    select?: PublicacionBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionBolsaInclude<ExtArgs> | null
  }


  /**
   * Model ReservaBolsa
   */

  export type AggregateReservaBolsa = {
    _count: ReservaBolsaCountAggregateOutputType | null
    _avg: ReservaBolsaAvgAggregateOutputType | null
    _sum: ReservaBolsaSumAggregateOutputType | null
    _min: ReservaBolsaMinAggregateOutputType | null
    _max: ReservaBolsaMaxAggregateOutputType | null
  }

  export type ReservaBolsaAvgAggregateOutputType = {
    unidades: number | null
  }

  export type ReservaBolsaSumAggregateOutputType = {
    unidades: number | null
  }

  export type ReservaBolsaMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    publicacionId: string | null
    unidades: number | null
    estado: $Enums.EstadoBolsa | null
    codigo: string | null
    metodoPago: $Enums.MetodoPago | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ReservaBolsaMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    publicacionId: string | null
    unidades: number | null
    estado: $Enums.EstadoBolsa | null
    codigo: string | null
    metodoPago: $Enums.MetodoPago | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ReservaBolsaCountAggregateOutputType = {
    id: number
    clienteId: number
    publicacionId: number
    unidades: number
    estado: number
    codigo: number
    metodoPago: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ReservaBolsaAvgAggregateInputType = {
    unidades?: true
  }

  export type ReservaBolsaSumAggregateInputType = {
    unidades?: true
  }

  export type ReservaBolsaMinAggregateInputType = {
    id?: true
    clienteId?: true
    publicacionId?: true
    unidades?: true
    estado?: true
    codigo?: true
    metodoPago?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ReservaBolsaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    publicacionId?: true
    unidades?: true
    estado?: true
    codigo?: true
    metodoPago?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ReservaBolsaCountAggregateInputType = {
    id?: true
    clienteId?: true
    publicacionId?: true
    unidades?: true
    estado?: true
    codigo?: true
    metodoPago?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ReservaBolsaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservaBolsa to aggregate.
     */
    where?: ReservaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaBolsas to fetch.
     */
    orderBy?: ReservaBolsaOrderByWithRelationInput | ReservaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservaBolsas
    **/
    _count?: true | ReservaBolsaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaBolsaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaBolsaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaBolsaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaBolsaMaxAggregateInputType
  }

  export type GetReservaBolsaAggregateType<T extends ReservaBolsaAggregateArgs> = {
        [P in keyof T & keyof AggregateReservaBolsa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservaBolsa[P]>
      : GetScalarType<T[P], AggregateReservaBolsa[P]>
  }




  export type ReservaBolsaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaBolsaWhereInput
    orderBy?: ReservaBolsaOrderByWithAggregationInput | ReservaBolsaOrderByWithAggregationInput[]
    by: ReservaBolsaScalarFieldEnum[] | ReservaBolsaScalarFieldEnum
    having?: ReservaBolsaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaBolsaCountAggregateInputType | true
    _avg?: ReservaBolsaAvgAggregateInputType
    _sum?: ReservaBolsaSumAggregateInputType
    _min?: ReservaBolsaMinAggregateInputType
    _max?: ReservaBolsaMaxAggregateInputType
  }

  export type ReservaBolsaGroupByOutputType = {
    id: string
    clienteId: string
    publicacionId: string
    unidades: number
    estado: $Enums.EstadoBolsa
    codigo: string
    metodoPago: $Enums.MetodoPago
    creadoEn: Date
    actualizadoEn: Date
    _count: ReservaBolsaCountAggregateOutputType | null
    _avg: ReservaBolsaAvgAggregateOutputType | null
    _sum: ReservaBolsaSumAggregateOutputType | null
    _min: ReservaBolsaMinAggregateOutputType | null
    _max: ReservaBolsaMaxAggregateOutputType | null
  }

  type GetReservaBolsaGroupByPayload<T extends ReservaBolsaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaBolsaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaBolsaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaBolsaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaBolsaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaBolsaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    publicacionId?: boolean
    unidades?: boolean
    estado?: boolean
    codigo?: boolean
    metodoPago?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionBolsaDefaultArgs<ExtArgs>
    resena?: boolean | ReservaBolsa$resenaArgs<ExtArgs>
  }, ExtArgs["result"]["reservaBolsa"]>

  export type ReservaBolsaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    publicacionId?: boolean
    unidades?: boolean
    estado?: boolean
    codigo?: boolean
    metodoPago?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionBolsaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservaBolsa"]>

  export type ReservaBolsaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    publicacionId?: boolean
    unidades?: boolean
    estado?: boolean
    codigo?: boolean
    metodoPago?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ReservaBolsaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionBolsaDefaultArgs<ExtArgs>
    resena?: boolean | ReservaBolsa$resenaArgs<ExtArgs>
  }
  export type ReservaBolsaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionBolsaDefaultArgs<ExtArgs>
  }

  export type $ReservaBolsaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservaBolsa"
    objects: {
      cliente: Prisma.$UsuarioPayload<ExtArgs>
      publicacion: Prisma.$PublicacionBolsaPayload<ExtArgs>
      resena: Prisma.$ResenaBolsaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      publicacionId: string
      unidades: number
      estado: $Enums.EstadoBolsa
      codigo: string
      metodoPago: $Enums.MetodoPago
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["reservaBolsa"]>
    composites: {}
  }

  type ReservaBolsaGetPayload<S extends boolean | null | undefined | ReservaBolsaDefaultArgs> = $Result.GetResult<Prisma.$ReservaBolsaPayload, S>

  type ReservaBolsaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservaBolsaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservaBolsaCountAggregateInputType | true
    }

  export interface ReservaBolsaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservaBolsa'], meta: { name: 'ReservaBolsa' } }
    /**
     * Find zero or one ReservaBolsa that matches the filter.
     * @param {ReservaBolsaFindUniqueArgs} args - Arguments to find a ReservaBolsa
     * @example
     * // Get one ReservaBolsa
     * const reservaBolsa = await prisma.reservaBolsa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaBolsaFindUniqueArgs>(args: SelectSubset<T, ReservaBolsaFindUniqueArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReservaBolsa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservaBolsaFindUniqueOrThrowArgs} args - Arguments to find a ReservaBolsa
     * @example
     * // Get one ReservaBolsa
     * const reservaBolsa = await prisma.reservaBolsa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaBolsaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaBolsaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReservaBolsa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaFindFirstArgs} args - Arguments to find a ReservaBolsa
     * @example
     * // Get one ReservaBolsa
     * const reservaBolsa = await prisma.reservaBolsa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaBolsaFindFirstArgs>(args?: SelectSubset<T, ReservaBolsaFindFirstArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReservaBolsa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaFindFirstOrThrowArgs} args - Arguments to find a ReservaBolsa
     * @example
     * // Get one ReservaBolsa
     * const reservaBolsa = await prisma.reservaBolsa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaBolsaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaBolsaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReservaBolsas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservaBolsas
     * const reservaBolsas = await prisma.reservaBolsa.findMany()
     * 
     * // Get first 10 ReservaBolsas
     * const reservaBolsas = await prisma.reservaBolsa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaBolsaWithIdOnly = await prisma.reservaBolsa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaBolsaFindManyArgs>(args?: SelectSubset<T, ReservaBolsaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReservaBolsa.
     * @param {ReservaBolsaCreateArgs} args - Arguments to create a ReservaBolsa.
     * @example
     * // Create one ReservaBolsa
     * const ReservaBolsa = await prisma.reservaBolsa.create({
     *   data: {
     *     // ... data to create a ReservaBolsa
     *   }
     * })
     * 
     */
    create<T extends ReservaBolsaCreateArgs>(args: SelectSubset<T, ReservaBolsaCreateArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReservaBolsas.
     * @param {ReservaBolsaCreateManyArgs} args - Arguments to create many ReservaBolsas.
     * @example
     * // Create many ReservaBolsas
     * const reservaBolsa = await prisma.reservaBolsa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaBolsaCreateManyArgs>(args?: SelectSubset<T, ReservaBolsaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservaBolsas and returns the data saved in the database.
     * @param {ReservaBolsaCreateManyAndReturnArgs} args - Arguments to create many ReservaBolsas.
     * @example
     * // Create many ReservaBolsas
     * const reservaBolsa = await prisma.reservaBolsa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservaBolsas and only return the `id`
     * const reservaBolsaWithIdOnly = await prisma.reservaBolsa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaBolsaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaBolsaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReservaBolsa.
     * @param {ReservaBolsaDeleteArgs} args - Arguments to delete one ReservaBolsa.
     * @example
     * // Delete one ReservaBolsa
     * const ReservaBolsa = await prisma.reservaBolsa.delete({
     *   where: {
     *     // ... filter to delete one ReservaBolsa
     *   }
     * })
     * 
     */
    delete<T extends ReservaBolsaDeleteArgs>(args: SelectSubset<T, ReservaBolsaDeleteArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReservaBolsa.
     * @param {ReservaBolsaUpdateArgs} args - Arguments to update one ReservaBolsa.
     * @example
     * // Update one ReservaBolsa
     * const reservaBolsa = await prisma.reservaBolsa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaBolsaUpdateArgs>(args: SelectSubset<T, ReservaBolsaUpdateArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReservaBolsas.
     * @param {ReservaBolsaDeleteManyArgs} args - Arguments to filter ReservaBolsas to delete.
     * @example
     * // Delete a few ReservaBolsas
     * const { count } = await prisma.reservaBolsa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaBolsaDeleteManyArgs>(args?: SelectSubset<T, ReservaBolsaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservaBolsas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservaBolsas
     * const reservaBolsa = await prisma.reservaBolsa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaBolsaUpdateManyArgs>(args: SelectSubset<T, ReservaBolsaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservaBolsa.
     * @param {ReservaBolsaUpsertArgs} args - Arguments to update or create a ReservaBolsa.
     * @example
     * // Update or create a ReservaBolsa
     * const reservaBolsa = await prisma.reservaBolsa.upsert({
     *   create: {
     *     // ... data to create a ReservaBolsa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservaBolsa we want to update
     *   }
     * })
     */
    upsert<T extends ReservaBolsaUpsertArgs>(args: SelectSubset<T, ReservaBolsaUpsertArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReservaBolsas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaCountArgs} args - Arguments to filter ReservaBolsas to count.
     * @example
     * // Count the number of ReservaBolsas
     * const count = await prisma.reservaBolsa.count({
     *   where: {
     *     // ... the filter for the ReservaBolsas we want to count
     *   }
     * })
    **/
    count<T extends ReservaBolsaCountArgs>(
      args?: Subset<T, ReservaBolsaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaBolsaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservaBolsa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaBolsaAggregateArgs>(args: Subset<T, ReservaBolsaAggregateArgs>): Prisma.PrismaPromise<GetReservaBolsaAggregateType<T>>

    /**
     * Group by ReservaBolsa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaBolsaGroupByArgs} args - Group by arguments.
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
      T extends ReservaBolsaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaBolsaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaBolsaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaBolsaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaBolsaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservaBolsa model
   */
  readonly fields: ReservaBolsaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservaBolsa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaBolsaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    publicacion<T extends PublicacionBolsaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionBolsaDefaultArgs<ExtArgs>>): Prisma__PublicacionBolsaClient<$Result.GetResult<Prisma.$PublicacionBolsaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    resena<T extends ReservaBolsa$resenaArgs<ExtArgs> = {}>(args?: Subset<T, ReservaBolsa$resenaArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReservaBolsa model
   */ 
  interface ReservaBolsaFieldRefs {
    readonly id: FieldRef<"ReservaBolsa", 'String'>
    readonly clienteId: FieldRef<"ReservaBolsa", 'String'>
    readonly publicacionId: FieldRef<"ReservaBolsa", 'String'>
    readonly unidades: FieldRef<"ReservaBolsa", 'Int'>
    readonly estado: FieldRef<"ReservaBolsa", 'EstadoBolsa'>
    readonly codigo: FieldRef<"ReservaBolsa", 'String'>
    readonly metodoPago: FieldRef<"ReservaBolsa", 'MetodoPago'>
    readonly creadoEn: FieldRef<"ReservaBolsa", 'DateTime'>
    readonly actualizadoEn: FieldRef<"ReservaBolsa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReservaBolsa findUnique
   */
  export type ReservaBolsaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaBolsa to fetch.
     */
    where: ReservaBolsaWhereUniqueInput
  }

  /**
   * ReservaBolsa findUniqueOrThrow
   */
  export type ReservaBolsaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaBolsa to fetch.
     */
    where: ReservaBolsaWhereUniqueInput
  }

  /**
   * ReservaBolsa findFirst
   */
  export type ReservaBolsaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaBolsa to fetch.
     */
    where?: ReservaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaBolsas to fetch.
     */
    orderBy?: ReservaBolsaOrderByWithRelationInput | ReservaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservaBolsas.
     */
    cursor?: ReservaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservaBolsas.
     */
    distinct?: ReservaBolsaScalarFieldEnum | ReservaBolsaScalarFieldEnum[]
  }

  /**
   * ReservaBolsa findFirstOrThrow
   */
  export type ReservaBolsaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaBolsa to fetch.
     */
    where?: ReservaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaBolsas to fetch.
     */
    orderBy?: ReservaBolsaOrderByWithRelationInput | ReservaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservaBolsas.
     */
    cursor?: ReservaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservaBolsas.
     */
    distinct?: ReservaBolsaScalarFieldEnum | ReservaBolsaScalarFieldEnum[]
  }

  /**
   * ReservaBolsa findMany
   */
  export type ReservaBolsaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ReservaBolsas to fetch.
     */
    where?: ReservaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservaBolsas to fetch.
     */
    orderBy?: ReservaBolsaOrderByWithRelationInput | ReservaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservaBolsas.
     */
    cursor?: ReservaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservaBolsas.
     */
    skip?: number
    distinct?: ReservaBolsaScalarFieldEnum | ReservaBolsaScalarFieldEnum[]
  }

  /**
   * ReservaBolsa create
   */
  export type ReservaBolsaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservaBolsa.
     */
    data: XOR<ReservaBolsaCreateInput, ReservaBolsaUncheckedCreateInput>
  }

  /**
   * ReservaBolsa createMany
   */
  export type ReservaBolsaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservaBolsas.
     */
    data: ReservaBolsaCreateManyInput | ReservaBolsaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservaBolsa createManyAndReturn
   */
  export type ReservaBolsaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReservaBolsas.
     */
    data: ReservaBolsaCreateManyInput | ReservaBolsaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservaBolsa update
   */
  export type ReservaBolsaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservaBolsa.
     */
    data: XOR<ReservaBolsaUpdateInput, ReservaBolsaUncheckedUpdateInput>
    /**
     * Choose, which ReservaBolsa to update.
     */
    where: ReservaBolsaWhereUniqueInput
  }

  /**
   * ReservaBolsa updateMany
   */
  export type ReservaBolsaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservaBolsas.
     */
    data: XOR<ReservaBolsaUpdateManyMutationInput, ReservaBolsaUncheckedUpdateManyInput>
    /**
     * Filter which ReservaBolsas to update
     */
    where?: ReservaBolsaWhereInput
  }

  /**
   * ReservaBolsa upsert
   */
  export type ReservaBolsaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservaBolsa to update in case it exists.
     */
    where: ReservaBolsaWhereUniqueInput
    /**
     * In case the ReservaBolsa found by the `where` argument doesn't exist, create a new ReservaBolsa with this data.
     */
    create: XOR<ReservaBolsaCreateInput, ReservaBolsaUncheckedCreateInput>
    /**
     * In case the ReservaBolsa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaBolsaUpdateInput, ReservaBolsaUncheckedUpdateInput>
  }

  /**
   * ReservaBolsa delete
   */
  export type ReservaBolsaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
    /**
     * Filter which ReservaBolsa to delete.
     */
    where: ReservaBolsaWhereUniqueInput
  }

  /**
   * ReservaBolsa deleteMany
   */
  export type ReservaBolsaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservaBolsas to delete
     */
    where?: ReservaBolsaWhereInput
  }

  /**
   * ReservaBolsa.resena
   */
  export type ReservaBolsa$resenaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    where?: ResenaBolsaWhereInput
  }

  /**
   * ReservaBolsa without action
   */
  export type ReservaBolsaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaBolsa
     */
    select?: ReservaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaBolsaInclude<ExtArgs> | null
  }


  /**
   * Model ResenaBolsa
   */

  export type AggregateResenaBolsa = {
    _count: ResenaBolsaCountAggregateOutputType | null
    _avg: ResenaBolsaAvgAggregateOutputType | null
    _sum: ResenaBolsaSumAggregateOutputType | null
    _min: ResenaBolsaMinAggregateOutputType | null
    _max: ResenaBolsaMaxAggregateOutputType | null
  }

  export type ResenaBolsaAvgAggregateOutputType = {
    rating: number | null
  }

  export type ResenaBolsaSumAggregateOutputType = {
    rating: number | null
  }

  export type ResenaBolsaMinAggregateOutputType = {
    id: string | null
    reservaId: string | null
    clienteId: string | null
    rating: number | null
    comentario: string | null
    creadoEn: Date | null
  }

  export type ResenaBolsaMaxAggregateOutputType = {
    id: string | null
    reservaId: string | null
    clienteId: string | null
    rating: number | null
    comentario: string | null
    creadoEn: Date | null
  }

  export type ResenaBolsaCountAggregateOutputType = {
    id: number
    reservaId: number
    clienteId: number
    rating: number
    comentario: number
    creadoEn: number
    _all: number
  }


  export type ResenaBolsaAvgAggregateInputType = {
    rating?: true
  }

  export type ResenaBolsaSumAggregateInputType = {
    rating?: true
  }

  export type ResenaBolsaMinAggregateInputType = {
    id?: true
    reservaId?: true
    clienteId?: true
    rating?: true
    comentario?: true
    creadoEn?: true
  }

  export type ResenaBolsaMaxAggregateInputType = {
    id?: true
    reservaId?: true
    clienteId?: true
    rating?: true
    comentario?: true
    creadoEn?: true
  }

  export type ResenaBolsaCountAggregateInputType = {
    id?: true
    reservaId?: true
    clienteId?: true
    rating?: true
    comentario?: true
    creadoEn?: true
    _all?: true
  }

  export type ResenaBolsaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResenaBolsa to aggregate.
     */
    where?: ResenaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaBolsas to fetch.
     */
    orderBy?: ResenaBolsaOrderByWithRelationInput | ResenaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResenaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResenaBolsas
    **/
    _count?: true | ResenaBolsaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResenaBolsaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResenaBolsaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResenaBolsaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResenaBolsaMaxAggregateInputType
  }

  export type GetResenaBolsaAggregateType<T extends ResenaBolsaAggregateArgs> = {
        [P in keyof T & keyof AggregateResenaBolsa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResenaBolsa[P]>
      : GetScalarType<T[P], AggregateResenaBolsa[P]>
  }




  export type ResenaBolsaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenaBolsaWhereInput
    orderBy?: ResenaBolsaOrderByWithAggregationInput | ResenaBolsaOrderByWithAggregationInput[]
    by: ResenaBolsaScalarFieldEnum[] | ResenaBolsaScalarFieldEnum
    having?: ResenaBolsaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResenaBolsaCountAggregateInputType | true
    _avg?: ResenaBolsaAvgAggregateInputType
    _sum?: ResenaBolsaSumAggregateInputType
    _min?: ResenaBolsaMinAggregateInputType
    _max?: ResenaBolsaMaxAggregateInputType
  }

  export type ResenaBolsaGroupByOutputType = {
    id: string
    reservaId: string
    clienteId: string
    rating: number
    comentario: string | null
    creadoEn: Date
    _count: ResenaBolsaCountAggregateOutputType | null
    _avg: ResenaBolsaAvgAggregateOutputType | null
    _sum: ResenaBolsaSumAggregateOutputType | null
    _min: ResenaBolsaMinAggregateOutputType | null
    _max: ResenaBolsaMaxAggregateOutputType | null
  }

  type GetResenaBolsaGroupByPayload<T extends ResenaBolsaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResenaBolsaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResenaBolsaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResenaBolsaGroupByOutputType[P]>
            : GetScalarType<T[P], ResenaBolsaGroupByOutputType[P]>
        }
      >
    >


  export type ResenaBolsaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    clienteId?: boolean
    rating?: boolean
    comentario?: boolean
    creadoEn?: boolean
    reserva?: boolean | ReservaBolsaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenaBolsa"]>

  export type ResenaBolsaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    clienteId?: boolean
    rating?: boolean
    comentario?: boolean
    creadoEn?: boolean
    reserva?: boolean | ReservaBolsaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenaBolsa"]>

  export type ResenaBolsaSelectScalar = {
    id?: boolean
    reservaId?: boolean
    clienteId?: boolean
    rating?: boolean
    comentario?: boolean
    creadoEn?: boolean
  }

  export type ResenaBolsaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaBolsaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResenaBolsaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaBolsaDefaultArgs<ExtArgs>
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ResenaBolsaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResenaBolsa"
    objects: {
      reserva: Prisma.$ReservaBolsaPayload<ExtArgs>
      cliente: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservaId: string
      clienteId: string
      rating: number
      comentario: string | null
      creadoEn: Date
    }, ExtArgs["result"]["resenaBolsa"]>
    composites: {}
  }

  type ResenaBolsaGetPayload<S extends boolean | null | undefined | ResenaBolsaDefaultArgs> = $Result.GetResult<Prisma.$ResenaBolsaPayload, S>

  type ResenaBolsaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResenaBolsaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResenaBolsaCountAggregateInputType | true
    }

  export interface ResenaBolsaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResenaBolsa'], meta: { name: 'ResenaBolsa' } }
    /**
     * Find zero or one ResenaBolsa that matches the filter.
     * @param {ResenaBolsaFindUniqueArgs} args - Arguments to find a ResenaBolsa
     * @example
     * // Get one ResenaBolsa
     * const resenaBolsa = await prisma.resenaBolsa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResenaBolsaFindUniqueArgs>(args: SelectSubset<T, ResenaBolsaFindUniqueArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResenaBolsa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResenaBolsaFindUniqueOrThrowArgs} args - Arguments to find a ResenaBolsa
     * @example
     * // Get one ResenaBolsa
     * const resenaBolsa = await prisma.resenaBolsa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResenaBolsaFindUniqueOrThrowArgs>(args: SelectSubset<T, ResenaBolsaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResenaBolsa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaFindFirstArgs} args - Arguments to find a ResenaBolsa
     * @example
     * // Get one ResenaBolsa
     * const resenaBolsa = await prisma.resenaBolsa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResenaBolsaFindFirstArgs>(args?: SelectSubset<T, ResenaBolsaFindFirstArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResenaBolsa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaFindFirstOrThrowArgs} args - Arguments to find a ResenaBolsa
     * @example
     * // Get one ResenaBolsa
     * const resenaBolsa = await prisma.resenaBolsa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResenaBolsaFindFirstOrThrowArgs>(args?: SelectSubset<T, ResenaBolsaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResenaBolsas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResenaBolsas
     * const resenaBolsas = await prisma.resenaBolsa.findMany()
     * 
     * // Get first 10 ResenaBolsas
     * const resenaBolsas = await prisma.resenaBolsa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resenaBolsaWithIdOnly = await prisma.resenaBolsa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResenaBolsaFindManyArgs>(args?: SelectSubset<T, ResenaBolsaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResenaBolsa.
     * @param {ResenaBolsaCreateArgs} args - Arguments to create a ResenaBolsa.
     * @example
     * // Create one ResenaBolsa
     * const ResenaBolsa = await prisma.resenaBolsa.create({
     *   data: {
     *     // ... data to create a ResenaBolsa
     *   }
     * })
     * 
     */
    create<T extends ResenaBolsaCreateArgs>(args: SelectSubset<T, ResenaBolsaCreateArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResenaBolsas.
     * @param {ResenaBolsaCreateManyArgs} args - Arguments to create many ResenaBolsas.
     * @example
     * // Create many ResenaBolsas
     * const resenaBolsa = await prisma.resenaBolsa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResenaBolsaCreateManyArgs>(args?: SelectSubset<T, ResenaBolsaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResenaBolsas and returns the data saved in the database.
     * @param {ResenaBolsaCreateManyAndReturnArgs} args - Arguments to create many ResenaBolsas.
     * @example
     * // Create many ResenaBolsas
     * const resenaBolsa = await prisma.resenaBolsa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResenaBolsas and only return the `id`
     * const resenaBolsaWithIdOnly = await prisma.resenaBolsa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResenaBolsaCreateManyAndReturnArgs>(args?: SelectSubset<T, ResenaBolsaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResenaBolsa.
     * @param {ResenaBolsaDeleteArgs} args - Arguments to delete one ResenaBolsa.
     * @example
     * // Delete one ResenaBolsa
     * const ResenaBolsa = await prisma.resenaBolsa.delete({
     *   where: {
     *     // ... filter to delete one ResenaBolsa
     *   }
     * })
     * 
     */
    delete<T extends ResenaBolsaDeleteArgs>(args: SelectSubset<T, ResenaBolsaDeleteArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResenaBolsa.
     * @param {ResenaBolsaUpdateArgs} args - Arguments to update one ResenaBolsa.
     * @example
     * // Update one ResenaBolsa
     * const resenaBolsa = await prisma.resenaBolsa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResenaBolsaUpdateArgs>(args: SelectSubset<T, ResenaBolsaUpdateArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResenaBolsas.
     * @param {ResenaBolsaDeleteManyArgs} args - Arguments to filter ResenaBolsas to delete.
     * @example
     * // Delete a few ResenaBolsas
     * const { count } = await prisma.resenaBolsa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResenaBolsaDeleteManyArgs>(args?: SelectSubset<T, ResenaBolsaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResenaBolsas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResenaBolsas
     * const resenaBolsa = await prisma.resenaBolsa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResenaBolsaUpdateManyArgs>(args: SelectSubset<T, ResenaBolsaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResenaBolsa.
     * @param {ResenaBolsaUpsertArgs} args - Arguments to update or create a ResenaBolsa.
     * @example
     * // Update or create a ResenaBolsa
     * const resenaBolsa = await prisma.resenaBolsa.upsert({
     *   create: {
     *     // ... data to create a ResenaBolsa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResenaBolsa we want to update
     *   }
     * })
     */
    upsert<T extends ResenaBolsaUpsertArgs>(args: SelectSubset<T, ResenaBolsaUpsertArgs<ExtArgs>>): Prisma__ResenaBolsaClient<$Result.GetResult<Prisma.$ResenaBolsaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResenaBolsas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaCountArgs} args - Arguments to filter ResenaBolsas to count.
     * @example
     * // Count the number of ResenaBolsas
     * const count = await prisma.resenaBolsa.count({
     *   where: {
     *     // ... the filter for the ResenaBolsas we want to count
     *   }
     * })
    **/
    count<T extends ResenaBolsaCountArgs>(
      args?: Subset<T, ResenaBolsaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResenaBolsaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResenaBolsa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResenaBolsaAggregateArgs>(args: Subset<T, ResenaBolsaAggregateArgs>): Prisma.PrismaPromise<GetResenaBolsaAggregateType<T>>

    /**
     * Group by ResenaBolsa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenaBolsaGroupByArgs} args - Group by arguments.
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
      T extends ResenaBolsaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResenaBolsaGroupByArgs['orderBy'] }
        : { orderBy?: ResenaBolsaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResenaBolsaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResenaBolsaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResenaBolsa model
   */
  readonly fields: ResenaBolsaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResenaBolsa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResenaBolsaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends ReservaBolsaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservaBolsaDefaultArgs<ExtArgs>>): Prisma__ReservaBolsaClient<$Result.GetResult<Prisma.$ReservaBolsaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResenaBolsa model
   */ 
  interface ResenaBolsaFieldRefs {
    readonly id: FieldRef<"ResenaBolsa", 'String'>
    readonly reservaId: FieldRef<"ResenaBolsa", 'String'>
    readonly clienteId: FieldRef<"ResenaBolsa", 'String'>
    readonly rating: FieldRef<"ResenaBolsa", 'Int'>
    readonly comentario: FieldRef<"ResenaBolsa", 'String'>
    readonly creadoEn: FieldRef<"ResenaBolsa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResenaBolsa findUnique
   */
  export type ResenaBolsaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaBolsa to fetch.
     */
    where: ResenaBolsaWhereUniqueInput
  }

  /**
   * ResenaBolsa findUniqueOrThrow
   */
  export type ResenaBolsaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaBolsa to fetch.
     */
    where: ResenaBolsaWhereUniqueInput
  }

  /**
   * ResenaBolsa findFirst
   */
  export type ResenaBolsaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaBolsa to fetch.
     */
    where?: ResenaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaBolsas to fetch.
     */
    orderBy?: ResenaBolsaOrderByWithRelationInput | ResenaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResenaBolsas.
     */
    cursor?: ResenaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResenaBolsas.
     */
    distinct?: ResenaBolsaScalarFieldEnum | ResenaBolsaScalarFieldEnum[]
  }

  /**
   * ResenaBolsa findFirstOrThrow
   */
  export type ResenaBolsaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaBolsa to fetch.
     */
    where?: ResenaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaBolsas to fetch.
     */
    orderBy?: ResenaBolsaOrderByWithRelationInput | ResenaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResenaBolsas.
     */
    cursor?: ResenaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaBolsas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResenaBolsas.
     */
    distinct?: ResenaBolsaScalarFieldEnum | ResenaBolsaScalarFieldEnum[]
  }

  /**
   * ResenaBolsa findMany
   */
  export type ResenaBolsaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * Filter, which ResenaBolsas to fetch.
     */
    where?: ResenaBolsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResenaBolsas to fetch.
     */
    orderBy?: ResenaBolsaOrderByWithRelationInput | ResenaBolsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResenaBolsas.
     */
    cursor?: ResenaBolsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResenaBolsas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResenaBolsas.
     */
    skip?: number
    distinct?: ResenaBolsaScalarFieldEnum | ResenaBolsaScalarFieldEnum[]
  }

  /**
   * ResenaBolsa create
   */
  export type ResenaBolsaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * The data needed to create a ResenaBolsa.
     */
    data: XOR<ResenaBolsaCreateInput, ResenaBolsaUncheckedCreateInput>
  }

  /**
   * ResenaBolsa createMany
   */
  export type ResenaBolsaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResenaBolsas.
     */
    data: ResenaBolsaCreateManyInput | ResenaBolsaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResenaBolsa createManyAndReturn
   */
  export type ResenaBolsaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResenaBolsas.
     */
    data: ResenaBolsaCreateManyInput | ResenaBolsaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResenaBolsa update
   */
  export type ResenaBolsaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * The data needed to update a ResenaBolsa.
     */
    data: XOR<ResenaBolsaUpdateInput, ResenaBolsaUncheckedUpdateInput>
    /**
     * Choose, which ResenaBolsa to update.
     */
    where: ResenaBolsaWhereUniqueInput
  }

  /**
   * ResenaBolsa updateMany
   */
  export type ResenaBolsaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResenaBolsas.
     */
    data: XOR<ResenaBolsaUpdateManyMutationInput, ResenaBolsaUncheckedUpdateManyInput>
    /**
     * Filter which ResenaBolsas to update
     */
    where?: ResenaBolsaWhereInput
  }

  /**
   * ResenaBolsa upsert
   */
  export type ResenaBolsaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * The filter to search for the ResenaBolsa to update in case it exists.
     */
    where: ResenaBolsaWhereUniqueInput
    /**
     * In case the ResenaBolsa found by the `where` argument doesn't exist, create a new ResenaBolsa with this data.
     */
    create: XOR<ResenaBolsaCreateInput, ResenaBolsaUncheckedCreateInput>
    /**
     * In case the ResenaBolsa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResenaBolsaUpdateInput, ResenaBolsaUncheckedUpdateInput>
  }

  /**
   * ResenaBolsa delete
   */
  export type ResenaBolsaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
    /**
     * Filter which ResenaBolsa to delete.
     */
    where: ResenaBolsaWhereUniqueInput
  }

  /**
   * ResenaBolsa deleteMany
   */
  export type ResenaBolsaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResenaBolsas to delete
     */
    where?: ResenaBolsaWhereInput
  }

  /**
   * ResenaBolsa without action
   */
  export type ResenaBolsaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResenaBolsa
     */
    select?: ResenaBolsaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenaBolsaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    nombre: 'nombre',
    telefono: 'telefono',
    rol: 'rol',
    idioma: 'idioma',
    moneda: 'moneda',
    dietaPreferencia: 'dietaPreferencia',
    puntos: 'puntos',
    noShowCount: 'noShowCount',
    altoRiesgo: 'altoRiesgo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RestauranteScalarFieldEnum: {
    id: 'id',
    managerId: 'managerId',
    nombre: 'nombre',
    descripcion: 'descripcion',
    direccion: 'direccion',
    ciudad: 'ciudad',
    barrio: 'barrio',
    lat: 'lat',
    lng: 'lng',
    telefono: 'telefono',
    email: 'email',
    sitioWeb: 'sitioWeb',
    tipoCocina: 'tipoCocina',
    precioMedio: 'precioMedio',
    capacidadTotal: 'capacidadTotal',
    estado: 'estado',
    servicios: 'servicios',
    fotos: 'fotos',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type RestauranteScalarFieldEnum = (typeof RestauranteScalarFieldEnum)[keyof typeof RestauranteScalarFieldEnum]


  export const TurnoScalarFieldEnum: {
    id: 'id',
    restauranteId: 'restauranteId',
    nombre: 'nombre',
    diasSemana: 'diasSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    intervaloMin: 'intervaloMin',
    capacidad: 'capacidad',
    activo: 'activo',
    creadoEn: 'creadoEn'
  };

  export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum]


  export const PromocionScalarFieldEnum: {
    id: 'id',
    restauranteId: 'restauranteId',
    nombre: 'nombre',
    tipo: 'tipo',
    valor: 'valor',
    condiciones: 'condiciones',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    diasSemana: 'diasSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type PromocionScalarFieldEnum = (typeof PromocionScalarFieldEnum)[keyof typeof PromocionScalarFieldEnum]


  export const ReservaMesaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    restauranteId: 'restauranteId',
    promocionId: 'promocionId',
    fecha: 'fecha',
    hora: 'hora',
    comensales: 'comensales',
    estado: 'estado',
    codigo: 'codigo',
    notas: 'notas',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ReservaMesaScalarFieldEnum = (typeof ReservaMesaScalarFieldEnum)[keyof typeof ReservaMesaScalarFieldEnum]


  export const ResenaMesaScalarFieldEnum: {
    id: 'id',
    reservaId: 'reservaId',
    clienteId: 'clienteId',
    rating: 'rating',
    comentario: 'comentario',
    creadoEn: 'creadoEn'
  };

  export type ResenaMesaScalarFieldEnum = (typeof ResenaMesaScalarFieldEnum)[keyof typeof ResenaMesaScalarFieldEnum]


  export const BolsaSorpresaPlantillaScalarFieldEnum: {
    id: 'id',
    restauranteId: 'restauranteId',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    valorEstimado: 'valorEstimado',
    etiquetasDieta: 'etiquetasDieta',
    tipComida: 'tipComida',
    condiciones: 'condiciones',
    politicaReembolso: 'politicaReembolso',
    activa: 'activa',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type BolsaSorpresaPlantillaScalarFieldEnum = (typeof BolsaSorpresaPlantillaScalarFieldEnum)[keyof typeof BolsaSorpresaPlantillaScalarFieldEnum]


  export const PublicacionBolsaScalarFieldEnum: {
    id: 'id',
    restauranteId: 'restauranteId',
    plantillaId: 'plantillaId',
    fecha: 'fecha',
    franjaInicio: 'franjaInicio',
    franjaFin: 'franjaFin',
    unidadesTotales: 'unidadesTotales',
    unidadesVendidas: 'unidadesVendidas',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type PublicacionBolsaScalarFieldEnum = (typeof PublicacionBolsaScalarFieldEnum)[keyof typeof PublicacionBolsaScalarFieldEnum]


  export const ReservaBolsaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    publicacionId: 'publicacionId',
    unidades: 'unidades',
    estado: 'estado',
    codigo: 'codigo',
    metodoPago: 'metodoPago',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ReservaBolsaScalarFieldEnum = (typeof ReservaBolsaScalarFieldEnum)[keyof typeof ReservaBolsaScalarFieldEnum]


  export const ResenaBolsaScalarFieldEnum: {
    id: 'id',
    reservaId: 'reservaId',
    clienteId: 'clienteId',
    rating: 'rating',
    comentario: 'comentario',
    creadoEn: 'creadoEn'
  };

  export type ResenaBolsaScalarFieldEnum = (typeof ResenaBolsaScalarFieldEnum)[keyof typeof ResenaBolsaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EstadoRestaurante'
   */
  export type EnumEstadoRestauranteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoRestaurante'>
    


  /**
   * Reference to a field of type 'EstadoRestaurante[]'
   */
  export type ListEnumEstadoRestauranteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoRestaurante[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'TipoPromo'
   */
  export type EnumTipoPromoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPromo'>
    


  /**
   * Reference to a field of type 'TipoPromo[]'
   */
  export type ListEnumTipoPromoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPromo[]'>
    


  /**
   * Reference to a field of type 'EstadoPromo'
   */
  export type EnumEstadoPromoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPromo'>
    


  /**
   * Reference to a field of type 'EstadoPromo[]'
   */
  export type ListEnumEstadoPromoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPromo[]'>
    


  /**
   * Reference to a field of type 'EstadoReserva'
   */
  export type EnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva'>
    


  /**
   * Reference to a field of type 'EstadoReserva[]'
   */
  export type ListEnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva[]'>
    


  /**
   * Reference to a field of type 'EstadoPublicacion'
   */
  export type EnumEstadoPublicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPublicacion'>
    


  /**
   * Reference to a field of type 'EstadoPublicacion[]'
   */
  export type ListEnumEstadoPublicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPublicacion[]'>
    


  /**
   * Reference to a field of type 'EstadoBolsa'
   */
  export type EnumEstadoBolsaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBolsa'>
    


  /**
   * Reference to a field of type 'EstadoBolsa[]'
   */
  export type ListEnumEstadoBolsaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBolsa[]'>
    


  /**
   * Reference to a field of type 'MetodoPago'
   */
  export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>
    


  /**
   * Reference to a field of type 'MetodoPago[]'
   */
  export type ListEnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringNullableFilter<"Usuario"> | string | null
    nombre?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    idioma?: StringFilter<"Usuario"> | string
    moneda?: StringFilter<"Usuario"> | string
    dietaPreferencia?: StringNullableListFilter<"Usuario">
    puntos?: IntFilter<"Usuario"> | number
    noShowCount?: IntFilter<"Usuario"> | number
    altoRiesgo?: BoolFilter<"Usuario"> | boolean
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    reservasMesa?: ReservaMesaListRelationFilter
    reservasBolsa?: ReservaBolsaListRelationFilter
    resenasMesa?: ResenaMesaListRelationFilter
    resenasBolsa?: ResenaBolsaListRelationFilter
    restaurante?: XOR<RestauranteNullableRelationFilter, RestauranteWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    rol?: SortOrder
    idioma?: SortOrder
    moneda?: SortOrder
    dietaPreferencia?: SortOrder
    puntos?: SortOrder
    noShowCount?: SortOrder
    altoRiesgo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    reservasMesa?: ReservaMesaOrderByRelationAggregateInput
    reservasBolsa?: ReservaBolsaOrderByRelationAggregateInput
    resenasMesa?: ResenaMesaOrderByRelationAggregateInput
    resenasBolsa?: ResenaBolsaOrderByRelationAggregateInput
    restaurante?: RestauranteOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    passwordHash?: StringNullableFilter<"Usuario"> | string | null
    nombre?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    idioma?: StringFilter<"Usuario"> | string
    moneda?: StringFilter<"Usuario"> | string
    dietaPreferencia?: StringNullableListFilter<"Usuario">
    puntos?: IntFilter<"Usuario"> | number
    noShowCount?: IntFilter<"Usuario"> | number
    altoRiesgo?: BoolFilter<"Usuario"> | boolean
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    reservasMesa?: ReservaMesaListRelationFilter
    reservasBolsa?: ReservaBolsaListRelationFilter
    resenasMesa?: ResenaMesaListRelationFilter
    resenasBolsa?: ResenaBolsaListRelationFilter
    restaurante?: XOR<RestauranteNullableRelationFilter, RestauranteWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    rol?: SortOrder
    idioma?: SortOrder
    moneda?: SortOrder
    dietaPreferencia?: SortOrder
    puntos?: SortOrder
    noShowCount?: SortOrder
    altoRiesgo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    idioma?: StringWithAggregatesFilter<"Usuario"> | string
    moneda?: StringWithAggregatesFilter<"Usuario"> | string
    dietaPreferencia?: StringNullableListFilter<"Usuario">
    puntos?: IntWithAggregatesFilter<"Usuario"> | number
    noShowCount?: IntWithAggregatesFilter<"Usuario"> | number
    altoRiesgo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RestauranteWhereInput = {
    AND?: RestauranteWhereInput | RestauranteWhereInput[]
    OR?: RestauranteWhereInput[]
    NOT?: RestauranteWhereInput | RestauranteWhereInput[]
    id?: StringFilter<"Restaurante"> | string
    managerId?: StringFilter<"Restaurante"> | string
    nombre?: StringFilter<"Restaurante"> | string
    descripcion?: StringNullableFilter<"Restaurante"> | string | null
    direccion?: StringFilter<"Restaurante"> | string
    ciudad?: StringFilter<"Restaurante"> | string
    barrio?: StringNullableFilter<"Restaurante"> | string | null
    lat?: FloatNullableFilter<"Restaurante"> | number | null
    lng?: FloatNullableFilter<"Restaurante"> | number | null
    telefono?: StringNullableFilter<"Restaurante"> | string | null
    email?: StringNullableFilter<"Restaurante"> | string | null
    sitioWeb?: StringNullableFilter<"Restaurante"> | string | null
    tipoCocina?: StringNullableListFilter<"Restaurante">
    precioMedio?: IntFilter<"Restaurante"> | number
    capacidadTotal?: IntFilter<"Restaurante"> | number
    estado?: EnumEstadoRestauranteFilter<"Restaurante"> | $Enums.EstadoRestaurante
    servicios?: JsonFilter<"Restaurante">
    fotos?: StringNullableListFilter<"Restaurante">
    creadoEn?: DateTimeFilter<"Restaurante"> | Date | string
    actualizadoEn?: DateTimeFilter<"Restaurante"> | Date | string
    manager?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    turnos?: TurnoListRelationFilter
    promos?: PromocionListRelationFilter
    reservasMesa?: ReservaMesaListRelationFilter
    plantillasBolsa?: BolsaSorpresaPlantillaListRelationFilter
    publicaciones?: PublicacionBolsaListRelationFilter
  }

  export type RestauranteOrderByWithRelationInput = {
    id?: SortOrder
    managerId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sitioWeb?: SortOrderInput | SortOrder
    tipoCocina?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
    estado?: SortOrder
    servicios?: SortOrder
    fotos?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    manager?: UsuarioOrderByWithRelationInput
    turnos?: TurnoOrderByRelationAggregateInput
    promos?: PromocionOrderByRelationAggregateInput
    reservasMesa?: ReservaMesaOrderByRelationAggregateInput
    plantillasBolsa?: BolsaSorpresaPlantillaOrderByRelationAggregateInput
    publicaciones?: PublicacionBolsaOrderByRelationAggregateInput
  }

  export type RestauranteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    managerId?: string
    AND?: RestauranteWhereInput | RestauranteWhereInput[]
    OR?: RestauranteWhereInput[]
    NOT?: RestauranteWhereInput | RestauranteWhereInput[]
    nombre?: StringFilter<"Restaurante"> | string
    descripcion?: StringNullableFilter<"Restaurante"> | string | null
    direccion?: StringFilter<"Restaurante"> | string
    ciudad?: StringFilter<"Restaurante"> | string
    barrio?: StringNullableFilter<"Restaurante"> | string | null
    lat?: FloatNullableFilter<"Restaurante"> | number | null
    lng?: FloatNullableFilter<"Restaurante"> | number | null
    telefono?: StringNullableFilter<"Restaurante"> | string | null
    email?: StringNullableFilter<"Restaurante"> | string | null
    sitioWeb?: StringNullableFilter<"Restaurante"> | string | null
    tipoCocina?: StringNullableListFilter<"Restaurante">
    precioMedio?: IntFilter<"Restaurante"> | number
    capacidadTotal?: IntFilter<"Restaurante"> | number
    estado?: EnumEstadoRestauranteFilter<"Restaurante"> | $Enums.EstadoRestaurante
    servicios?: JsonFilter<"Restaurante">
    fotos?: StringNullableListFilter<"Restaurante">
    creadoEn?: DateTimeFilter<"Restaurante"> | Date | string
    actualizadoEn?: DateTimeFilter<"Restaurante"> | Date | string
    manager?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    turnos?: TurnoListRelationFilter
    promos?: PromocionListRelationFilter
    reservasMesa?: ReservaMesaListRelationFilter
    plantillasBolsa?: BolsaSorpresaPlantillaListRelationFilter
    publicaciones?: PublicacionBolsaListRelationFilter
  }, "id" | "managerId">

  export type RestauranteOrderByWithAggregationInput = {
    id?: SortOrder
    managerId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sitioWeb?: SortOrderInput | SortOrder
    tipoCocina?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
    estado?: SortOrder
    servicios?: SortOrder
    fotos?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: RestauranteCountOrderByAggregateInput
    _avg?: RestauranteAvgOrderByAggregateInput
    _max?: RestauranteMaxOrderByAggregateInput
    _min?: RestauranteMinOrderByAggregateInput
    _sum?: RestauranteSumOrderByAggregateInput
  }

  export type RestauranteScalarWhereWithAggregatesInput = {
    AND?: RestauranteScalarWhereWithAggregatesInput | RestauranteScalarWhereWithAggregatesInput[]
    OR?: RestauranteScalarWhereWithAggregatesInput[]
    NOT?: RestauranteScalarWhereWithAggregatesInput | RestauranteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurante"> | string
    managerId?: StringWithAggregatesFilter<"Restaurante"> | string
    nombre?: StringWithAggregatesFilter<"Restaurante"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    direccion?: StringWithAggregatesFilter<"Restaurante"> | string
    ciudad?: StringWithAggregatesFilter<"Restaurante"> | string
    barrio?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Restaurante"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Restaurante"> | number | null
    telefono?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    email?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    sitioWeb?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    tipoCocina?: StringNullableListFilter<"Restaurante">
    precioMedio?: IntWithAggregatesFilter<"Restaurante"> | number
    capacidadTotal?: IntWithAggregatesFilter<"Restaurante"> | number
    estado?: EnumEstadoRestauranteWithAggregatesFilter<"Restaurante"> | $Enums.EstadoRestaurante
    servicios?: JsonWithAggregatesFilter<"Restaurante">
    fotos?: StringNullableListFilter<"Restaurante">
    creadoEn?: DateTimeWithAggregatesFilter<"Restaurante"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Restaurante"> | Date | string
  }

  export type TurnoWhereInput = {
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    id?: StringFilter<"Turno"> | string
    restauranteId?: StringFilter<"Turno"> | string
    nombre?: StringFilter<"Turno"> | string
    diasSemana?: IntNullableListFilter<"Turno">
    horaInicio?: StringFilter<"Turno"> | string
    horaFin?: StringFilter<"Turno"> | string
    intervaloMin?: IntFilter<"Turno"> | number
    capacidad?: IntFilter<"Turno"> | number
    activo?: BoolFilter<"Turno"> | boolean
    creadoEn?: DateTimeFilter<"Turno"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
  }

  export type TurnoOrderByWithRelationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    diasSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    restaurante?: RestauranteOrderByWithRelationInput
  }

  export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    restauranteId?: StringFilter<"Turno"> | string
    nombre?: StringFilter<"Turno"> | string
    diasSemana?: IntNullableListFilter<"Turno">
    horaInicio?: StringFilter<"Turno"> | string
    horaFin?: StringFilter<"Turno"> | string
    intervaloMin?: IntFilter<"Turno"> | number
    capacidad?: IntFilter<"Turno"> | number
    activo?: BoolFilter<"Turno"> | boolean
    creadoEn?: DateTimeFilter<"Turno"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
  }, "id">

  export type TurnoOrderByWithAggregationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    diasSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    _count?: TurnoCountOrderByAggregateInput
    _avg?: TurnoAvgOrderByAggregateInput
    _max?: TurnoMaxOrderByAggregateInput
    _min?: TurnoMinOrderByAggregateInput
    _sum?: TurnoSumOrderByAggregateInput
  }

  export type TurnoScalarWhereWithAggregatesInput = {
    AND?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    OR?: TurnoScalarWhereWithAggregatesInput[]
    NOT?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turno"> | string
    restauranteId?: StringWithAggregatesFilter<"Turno"> | string
    nombre?: StringWithAggregatesFilter<"Turno"> | string
    diasSemana?: IntNullableListFilter<"Turno">
    horaInicio?: StringWithAggregatesFilter<"Turno"> | string
    horaFin?: StringWithAggregatesFilter<"Turno"> | string
    intervaloMin?: IntWithAggregatesFilter<"Turno"> | number
    capacidad?: IntWithAggregatesFilter<"Turno"> | number
    activo?: BoolWithAggregatesFilter<"Turno"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Turno"> | Date | string
  }

  export type PromocionWhereInput = {
    AND?: PromocionWhereInput | PromocionWhereInput[]
    OR?: PromocionWhereInput[]
    NOT?: PromocionWhereInput | PromocionWhereInput[]
    id?: StringFilter<"Promocion"> | string
    restauranteId?: StringFilter<"Promocion"> | string
    nombre?: StringFilter<"Promocion"> | string
    tipo?: EnumTipoPromoFilter<"Promocion"> | $Enums.TipoPromo
    valor?: FloatFilter<"Promocion"> | number
    condiciones?: StringNullableFilter<"Promocion"> | string | null
    fechaInicio?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    diasSemana?: IntNullableListFilter<"Promocion">
    horaInicio?: StringNullableFilter<"Promocion"> | string | null
    horaFin?: StringNullableFilter<"Promocion"> | string | null
    estado?: EnumEstadoPromoFilter<"Promocion"> | $Enums.EstadoPromo
    creadoEn?: DateTimeFilter<"Promocion"> | Date | string
    actualizadoEn?: DateTimeFilter<"Promocion"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    reservasMesa?: ReservaMesaListRelationFilter
  }

  export type PromocionOrderByWithRelationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    condiciones?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    diasSemana?: SortOrder
    horaInicio?: SortOrderInput | SortOrder
    horaFin?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    restaurante?: RestauranteOrderByWithRelationInput
    reservasMesa?: ReservaMesaOrderByRelationAggregateInput
  }

  export type PromocionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromocionWhereInput | PromocionWhereInput[]
    OR?: PromocionWhereInput[]
    NOT?: PromocionWhereInput | PromocionWhereInput[]
    restauranteId?: StringFilter<"Promocion"> | string
    nombre?: StringFilter<"Promocion"> | string
    tipo?: EnumTipoPromoFilter<"Promocion"> | $Enums.TipoPromo
    valor?: FloatFilter<"Promocion"> | number
    condiciones?: StringNullableFilter<"Promocion"> | string | null
    fechaInicio?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    diasSemana?: IntNullableListFilter<"Promocion">
    horaInicio?: StringNullableFilter<"Promocion"> | string | null
    horaFin?: StringNullableFilter<"Promocion"> | string | null
    estado?: EnumEstadoPromoFilter<"Promocion"> | $Enums.EstadoPromo
    creadoEn?: DateTimeFilter<"Promocion"> | Date | string
    actualizadoEn?: DateTimeFilter<"Promocion"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    reservasMesa?: ReservaMesaListRelationFilter
  }, "id">

  export type PromocionOrderByWithAggregationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    condiciones?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    diasSemana?: SortOrder
    horaInicio?: SortOrderInput | SortOrder
    horaFin?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: PromocionCountOrderByAggregateInput
    _avg?: PromocionAvgOrderByAggregateInput
    _max?: PromocionMaxOrderByAggregateInput
    _min?: PromocionMinOrderByAggregateInput
    _sum?: PromocionSumOrderByAggregateInput
  }

  export type PromocionScalarWhereWithAggregatesInput = {
    AND?: PromocionScalarWhereWithAggregatesInput | PromocionScalarWhereWithAggregatesInput[]
    OR?: PromocionScalarWhereWithAggregatesInput[]
    NOT?: PromocionScalarWhereWithAggregatesInput | PromocionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promocion"> | string
    restauranteId?: StringWithAggregatesFilter<"Promocion"> | string
    nombre?: StringWithAggregatesFilter<"Promocion"> | string
    tipo?: EnumTipoPromoWithAggregatesFilter<"Promocion"> | $Enums.TipoPromo
    valor?: FloatWithAggregatesFilter<"Promocion"> | number
    condiciones?: StringNullableWithAggregatesFilter<"Promocion"> | string | null
    fechaInicio?: DateTimeNullableWithAggregatesFilter<"Promocion"> | Date | string | null
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Promocion"> | Date | string | null
    diasSemana?: IntNullableListFilter<"Promocion">
    horaInicio?: StringNullableWithAggregatesFilter<"Promocion"> | string | null
    horaFin?: StringNullableWithAggregatesFilter<"Promocion"> | string | null
    estado?: EnumEstadoPromoWithAggregatesFilter<"Promocion"> | $Enums.EstadoPromo
    creadoEn?: DateTimeWithAggregatesFilter<"Promocion"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Promocion"> | Date | string
  }

  export type ReservaMesaWhereInput = {
    AND?: ReservaMesaWhereInput | ReservaMesaWhereInput[]
    OR?: ReservaMesaWhereInput[]
    NOT?: ReservaMesaWhereInput | ReservaMesaWhereInput[]
    id?: StringFilter<"ReservaMesa"> | string
    clienteId?: StringFilter<"ReservaMesa"> | string
    restauranteId?: StringFilter<"ReservaMesa"> | string
    promocionId?: StringNullableFilter<"ReservaMesa"> | string | null
    fecha?: DateTimeFilter<"ReservaMesa"> | Date | string
    hora?: StringFilter<"ReservaMesa"> | string
    comensales?: IntFilter<"ReservaMesa"> | number
    estado?: EnumEstadoReservaFilter<"ReservaMesa"> | $Enums.EstadoReserva
    codigo?: StringFilter<"ReservaMesa"> | string
    notas?: StringNullableFilter<"ReservaMesa"> | string | null
    creadoEn?: DateTimeFilter<"ReservaMesa"> | Date | string
    actualizadoEn?: DateTimeFilter<"ReservaMesa"> | Date | string
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    promocion?: XOR<PromocionNullableRelationFilter, PromocionWhereInput> | null
    resena?: XOR<ResenaMesaNullableRelationFilter, ResenaMesaWhereInput> | null
  }

  export type ReservaMesaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    promocionId?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    comensales?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    notas?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    cliente?: UsuarioOrderByWithRelationInput
    restaurante?: RestauranteOrderByWithRelationInput
    promocion?: PromocionOrderByWithRelationInput
    resena?: ResenaMesaOrderByWithRelationInput
  }

  export type ReservaMesaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: ReservaMesaWhereInput | ReservaMesaWhereInput[]
    OR?: ReservaMesaWhereInput[]
    NOT?: ReservaMesaWhereInput | ReservaMesaWhereInput[]
    clienteId?: StringFilter<"ReservaMesa"> | string
    restauranteId?: StringFilter<"ReservaMesa"> | string
    promocionId?: StringNullableFilter<"ReservaMesa"> | string | null
    fecha?: DateTimeFilter<"ReservaMesa"> | Date | string
    hora?: StringFilter<"ReservaMesa"> | string
    comensales?: IntFilter<"ReservaMesa"> | number
    estado?: EnumEstadoReservaFilter<"ReservaMesa"> | $Enums.EstadoReserva
    notas?: StringNullableFilter<"ReservaMesa"> | string | null
    creadoEn?: DateTimeFilter<"ReservaMesa"> | Date | string
    actualizadoEn?: DateTimeFilter<"ReservaMesa"> | Date | string
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    promocion?: XOR<PromocionNullableRelationFilter, PromocionWhereInput> | null
    resena?: XOR<ResenaMesaNullableRelationFilter, ResenaMesaWhereInput> | null
  }, "id" | "codigo">

  export type ReservaMesaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    promocionId?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    comensales?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    notas?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ReservaMesaCountOrderByAggregateInput
    _avg?: ReservaMesaAvgOrderByAggregateInput
    _max?: ReservaMesaMaxOrderByAggregateInput
    _min?: ReservaMesaMinOrderByAggregateInput
    _sum?: ReservaMesaSumOrderByAggregateInput
  }

  export type ReservaMesaScalarWhereWithAggregatesInput = {
    AND?: ReservaMesaScalarWhereWithAggregatesInput | ReservaMesaScalarWhereWithAggregatesInput[]
    OR?: ReservaMesaScalarWhereWithAggregatesInput[]
    NOT?: ReservaMesaScalarWhereWithAggregatesInput | ReservaMesaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservaMesa"> | string
    clienteId?: StringWithAggregatesFilter<"ReservaMesa"> | string
    restauranteId?: StringWithAggregatesFilter<"ReservaMesa"> | string
    promocionId?: StringNullableWithAggregatesFilter<"ReservaMesa"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"ReservaMesa"> | Date | string
    hora?: StringWithAggregatesFilter<"ReservaMesa"> | string
    comensales?: IntWithAggregatesFilter<"ReservaMesa"> | number
    estado?: EnumEstadoReservaWithAggregatesFilter<"ReservaMesa"> | $Enums.EstadoReserva
    codigo?: StringWithAggregatesFilter<"ReservaMesa"> | string
    notas?: StringNullableWithAggregatesFilter<"ReservaMesa"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"ReservaMesa"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"ReservaMesa"> | Date | string
  }

  export type ResenaMesaWhereInput = {
    AND?: ResenaMesaWhereInput | ResenaMesaWhereInput[]
    OR?: ResenaMesaWhereInput[]
    NOT?: ResenaMesaWhereInput | ResenaMesaWhereInput[]
    id?: StringFilter<"ResenaMesa"> | string
    reservaId?: StringFilter<"ResenaMesa"> | string
    clienteId?: StringFilter<"ResenaMesa"> | string
    rating?: IntFilter<"ResenaMesa"> | number
    comentario?: StringNullableFilter<"ResenaMesa"> | string | null
    creadoEn?: DateTimeFilter<"ResenaMesa"> | Date | string
    reserva?: XOR<ReservaMesaRelationFilter, ReservaMesaWhereInput>
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type ResenaMesaOrderByWithRelationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    reserva?: ReservaMesaOrderByWithRelationInput
    cliente?: UsuarioOrderByWithRelationInput
  }

  export type ResenaMesaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservaId?: string
    AND?: ResenaMesaWhereInput | ResenaMesaWhereInput[]
    OR?: ResenaMesaWhereInput[]
    NOT?: ResenaMesaWhereInput | ResenaMesaWhereInput[]
    clienteId?: StringFilter<"ResenaMesa"> | string
    rating?: IntFilter<"ResenaMesa"> | number
    comentario?: StringNullableFilter<"ResenaMesa"> | string | null
    creadoEn?: DateTimeFilter<"ResenaMesa"> | Date | string
    reserva?: XOR<ReservaMesaRelationFilter, ReservaMesaWhereInput>
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id" | "reservaId">

  export type ResenaMesaOrderByWithAggregationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: ResenaMesaCountOrderByAggregateInput
    _avg?: ResenaMesaAvgOrderByAggregateInput
    _max?: ResenaMesaMaxOrderByAggregateInput
    _min?: ResenaMesaMinOrderByAggregateInput
    _sum?: ResenaMesaSumOrderByAggregateInput
  }

  export type ResenaMesaScalarWhereWithAggregatesInput = {
    AND?: ResenaMesaScalarWhereWithAggregatesInput | ResenaMesaScalarWhereWithAggregatesInput[]
    OR?: ResenaMesaScalarWhereWithAggregatesInput[]
    NOT?: ResenaMesaScalarWhereWithAggregatesInput | ResenaMesaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResenaMesa"> | string
    reservaId?: StringWithAggregatesFilter<"ResenaMesa"> | string
    clienteId?: StringWithAggregatesFilter<"ResenaMesa"> | string
    rating?: IntWithAggregatesFilter<"ResenaMesa"> | number
    comentario?: StringNullableWithAggregatesFilter<"ResenaMesa"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"ResenaMesa"> | Date | string
  }

  export type BolsaSorpresaPlantillaWhereInput = {
    AND?: BolsaSorpresaPlantillaWhereInput | BolsaSorpresaPlantillaWhereInput[]
    OR?: BolsaSorpresaPlantillaWhereInput[]
    NOT?: BolsaSorpresaPlantillaWhereInput | BolsaSorpresaPlantillaWhereInput[]
    id?: StringFilter<"BolsaSorpresaPlantilla"> | string
    restauranteId?: StringFilter<"BolsaSorpresaPlantilla"> | string
    nombre?: StringFilter<"BolsaSorpresaPlantilla"> | string
    descripcion?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    precio?: FloatFilter<"BolsaSorpresaPlantilla"> | number
    valorEstimado?: FloatFilter<"BolsaSorpresaPlantilla"> | number
    etiquetasDieta?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    tipComida?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    condiciones?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    politicaReembolso?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    activa?: BoolFilter<"BolsaSorpresaPlantilla"> | boolean
    creadoEn?: DateTimeFilter<"BolsaSorpresaPlantilla"> | Date | string
    actualizadoEn?: DateTimeFilter<"BolsaSorpresaPlantilla"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    publicaciones?: PublicacionBolsaListRelationFilter
  }

  export type BolsaSorpresaPlantillaOrderByWithRelationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    valorEstimado?: SortOrder
    etiquetasDieta?: SortOrder
    tipComida?: SortOrder
    condiciones?: SortOrderInput | SortOrder
    politicaReembolso?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    restaurante?: RestauranteOrderByWithRelationInput
    publicaciones?: PublicacionBolsaOrderByRelationAggregateInput
  }

  export type BolsaSorpresaPlantillaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BolsaSorpresaPlantillaWhereInput | BolsaSorpresaPlantillaWhereInput[]
    OR?: BolsaSorpresaPlantillaWhereInput[]
    NOT?: BolsaSorpresaPlantillaWhereInput | BolsaSorpresaPlantillaWhereInput[]
    restauranteId?: StringFilter<"BolsaSorpresaPlantilla"> | string
    nombre?: StringFilter<"BolsaSorpresaPlantilla"> | string
    descripcion?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    precio?: FloatFilter<"BolsaSorpresaPlantilla"> | number
    valorEstimado?: FloatFilter<"BolsaSorpresaPlantilla"> | number
    etiquetasDieta?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    tipComida?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    condiciones?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    politicaReembolso?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    activa?: BoolFilter<"BolsaSorpresaPlantilla"> | boolean
    creadoEn?: DateTimeFilter<"BolsaSorpresaPlantilla"> | Date | string
    actualizadoEn?: DateTimeFilter<"BolsaSorpresaPlantilla"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    publicaciones?: PublicacionBolsaListRelationFilter
  }, "id">

  export type BolsaSorpresaPlantillaOrderByWithAggregationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    valorEstimado?: SortOrder
    etiquetasDieta?: SortOrder
    tipComida?: SortOrder
    condiciones?: SortOrderInput | SortOrder
    politicaReembolso?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: BolsaSorpresaPlantillaCountOrderByAggregateInput
    _avg?: BolsaSorpresaPlantillaAvgOrderByAggregateInput
    _max?: BolsaSorpresaPlantillaMaxOrderByAggregateInput
    _min?: BolsaSorpresaPlantillaMinOrderByAggregateInput
    _sum?: BolsaSorpresaPlantillaSumOrderByAggregateInput
  }

  export type BolsaSorpresaPlantillaScalarWhereWithAggregatesInput = {
    AND?: BolsaSorpresaPlantillaScalarWhereWithAggregatesInput | BolsaSorpresaPlantillaScalarWhereWithAggregatesInput[]
    OR?: BolsaSorpresaPlantillaScalarWhereWithAggregatesInput[]
    NOT?: BolsaSorpresaPlantillaScalarWhereWithAggregatesInput | BolsaSorpresaPlantillaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BolsaSorpresaPlantilla"> | string
    restauranteId?: StringWithAggregatesFilter<"BolsaSorpresaPlantilla"> | string
    nombre?: StringWithAggregatesFilter<"BolsaSorpresaPlantilla"> | string
    descripcion?: StringNullableWithAggregatesFilter<"BolsaSorpresaPlantilla"> | string | null
    precio?: FloatWithAggregatesFilter<"BolsaSorpresaPlantilla"> | number
    valorEstimado?: FloatWithAggregatesFilter<"BolsaSorpresaPlantilla"> | number
    etiquetasDieta?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    tipComida?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    condiciones?: StringNullableWithAggregatesFilter<"BolsaSorpresaPlantilla"> | string | null
    politicaReembolso?: StringNullableWithAggregatesFilter<"BolsaSorpresaPlantilla"> | string | null
    activa?: BoolWithAggregatesFilter<"BolsaSorpresaPlantilla"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"BolsaSorpresaPlantilla"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"BolsaSorpresaPlantilla"> | Date | string
  }

  export type PublicacionBolsaWhereInput = {
    AND?: PublicacionBolsaWhereInput | PublicacionBolsaWhereInput[]
    OR?: PublicacionBolsaWhereInput[]
    NOT?: PublicacionBolsaWhereInput | PublicacionBolsaWhereInput[]
    id?: StringFilter<"PublicacionBolsa"> | string
    restauranteId?: StringFilter<"PublicacionBolsa"> | string
    plantillaId?: StringFilter<"PublicacionBolsa"> | string
    fecha?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    franjaInicio?: StringFilter<"PublicacionBolsa"> | string
    franjaFin?: StringFilter<"PublicacionBolsa"> | string
    unidadesTotales?: IntFilter<"PublicacionBolsa"> | number
    unidadesVendidas?: IntFilter<"PublicacionBolsa"> | number
    estado?: EnumEstadoPublicacionFilter<"PublicacionBolsa"> | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    actualizadoEn?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    plantilla?: XOR<BolsaSorpresaPlantillaRelationFilter, BolsaSorpresaPlantillaWhereInput>
    reservas?: ReservaBolsaListRelationFilter
  }

  export type PublicacionBolsaOrderByWithRelationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    plantillaId?: SortOrder
    fecha?: SortOrder
    franjaInicio?: SortOrder
    franjaFin?: SortOrder
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    restaurante?: RestauranteOrderByWithRelationInput
    plantilla?: BolsaSorpresaPlantillaOrderByWithRelationInput
    reservas?: ReservaBolsaOrderByRelationAggregateInput
  }

  export type PublicacionBolsaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicacionBolsaWhereInput | PublicacionBolsaWhereInput[]
    OR?: PublicacionBolsaWhereInput[]
    NOT?: PublicacionBolsaWhereInput | PublicacionBolsaWhereInput[]
    restauranteId?: StringFilter<"PublicacionBolsa"> | string
    plantillaId?: StringFilter<"PublicacionBolsa"> | string
    fecha?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    franjaInicio?: StringFilter<"PublicacionBolsa"> | string
    franjaFin?: StringFilter<"PublicacionBolsa"> | string
    unidadesTotales?: IntFilter<"PublicacionBolsa"> | number
    unidadesVendidas?: IntFilter<"PublicacionBolsa"> | number
    estado?: EnumEstadoPublicacionFilter<"PublicacionBolsa"> | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    actualizadoEn?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    restaurante?: XOR<RestauranteRelationFilter, RestauranteWhereInput>
    plantilla?: XOR<BolsaSorpresaPlantillaRelationFilter, BolsaSorpresaPlantillaWhereInput>
    reservas?: ReservaBolsaListRelationFilter
  }, "id">

  export type PublicacionBolsaOrderByWithAggregationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    plantillaId?: SortOrder
    fecha?: SortOrder
    franjaInicio?: SortOrder
    franjaFin?: SortOrder
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: PublicacionBolsaCountOrderByAggregateInput
    _avg?: PublicacionBolsaAvgOrderByAggregateInput
    _max?: PublicacionBolsaMaxOrderByAggregateInput
    _min?: PublicacionBolsaMinOrderByAggregateInput
    _sum?: PublicacionBolsaSumOrderByAggregateInput
  }

  export type PublicacionBolsaScalarWhereWithAggregatesInput = {
    AND?: PublicacionBolsaScalarWhereWithAggregatesInput | PublicacionBolsaScalarWhereWithAggregatesInput[]
    OR?: PublicacionBolsaScalarWhereWithAggregatesInput[]
    NOT?: PublicacionBolsaScalarWhereWithAggregatesInput | PublicacionBolsaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicacionBolsa"> | string
    restauranteId?: StringWithAggregatesFilter<"PublicacionBolsa"> | string
    plantillaId?: StringWithAggregatesFilter<"PublicacionBolsa"> | string
    fecha?: DateTimeWithAggregatesFilter<"PublicacionBolsa"> | Date | string
    franjaInicio?: StringWithAggregatesFilter<"PublicacionBolsa"> | string
    franjaFin?: StringWithAggregatesFilter<"PublicacionBolsa"> | string
    unidadesTotales?: IntWithAggregatesFilter<"PublicacionBolsa"> | number
    unidadesVendidas?: IntWithAggregatesFilter<"PublicacionBolsa"> | number
    estado?: EnumEstadoPublicacionWithAggregatesFilter<"PublicacionBolsa"> | $Enums.EstadoPublicacion
    creadoEn?: DateTimeWithAggregatesFilter<"PublicacionBolsa"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"PublicacionBolsa"> | Date | string
  }

  export type ReservaBolsaWhereInput = {
    AND?: ReservaBolsaWhereInput | ReservaBolsaWhereInput[]
    OR?: ReservaBolsaWhereInput[]
    NOT?: ReservaBolsaWhereInput | ReservaBolsaWhereInput[]
    id?: StringFilter<"ReservaBolsa"> | string
    clienteId?: StringFilter<"ReservaBolsa"> | string
    publicacionId?: StringFilter<"ReservaBolsa"> | string
    unidades?: IntFilter<"ReservaBolsa"> | number
    estado?: EnumEstadoBolsaFilter<"ReservaBolsa"> | $Enums.EstadoBolsa
    codigo?: StringFilter<"ReservaBolsa"> | string
    metodoPago?: EnumMetodoPagoFilter<"ReservaBolsa"> | $Enums.MetodoPago
    creadoEn?: DateTimeFilter<"ReservaBolsa"> | Date | string
    actualizadoEn?: DateTimeFilter<"ReservaBolsa"> | Date | string
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    publicacion?: XOR<PublicacionBolsaRelationFilter, PublicacionBolsaWhereInput>
    resena?: XOR<ResenaBolsaNullableRelationFilter, ResenaBolsaWhereInput> | null
  }

  export type ReservaBolsaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    publicacionId?: SortOrder
    unidades?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    metodoPago?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    cliente?: UsuarioOrderByWithRelationInput
    publicacion?: PublicacionBolsaOrderByWithRelationInput
    resena?: ResenaBolsaOrderByWithRelationInput
  }

  export type ReservaBolsaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: ReservaBolsaWhereInput | ReservaBolsaWhereInput[]
    OR?: ReservaBolsaWhereInput[]
    NOT?: ReservaBolsaWhereInput | ReservaBolsaWhereInput[]
    clienteId?: StringFilter<"ReservaBolsa"> | string
    publicacionId?: StringFilter<"ReservaBolsa"> | string
    unidades?: IntFilter<"ReservaBolsa"> | number
    estado?: EnumEstadoBolsaFilter<"ReservaBolsa"> | $Enums.EstadoBolsa
    metodoPago?: EnumMetodoPagoFilter<"ReservaBolsa"> | $Enums.MetodoPago
    creadoEn?: DateTimeFilter<"ReservaBolsa"> | Date | string
    actualizadoEn?: DateTimeFilter<"ReservaBolsa"> | Date | string
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    publicacion?: XOR<PublicacionBolsaRelationFilter, PublicacionBolsaWhereInput>
    resena?: XOR<ResenaBolsaNullableRelationFilter, ResenaBolsaWhereInput> | null
  }, "id" | "codigo">

  export type ReservaBolsaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    publicacionId?: SortOrder
    unidades?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    metodoPago?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ReservaBolsaCountOrderByAggregateInput
    _avg?: ReservaBolsaAvgOrderByAggregateInput
    _max?: ReservaBolsaMaxOrderByAggregateInput
    _min?: ReservaBolsaMinOrderByAggregateInput
    _sum?: ReservaBolsaSumOrderByAggregateInput
  }

  export type ReservaBolsaScalarWhereWithAggregatesInput = {
    AND?: ReservaBolsaScalarWhereWithAggregatesInput | ReservaBolsaScalarWhereWithAggregatesInput[]
    OR?: ReservaBolsaScalarWhereWithAggregatesInput[]
    NOT?: ReservaBolsaScalarWhereWithAggregatesInput | ReservaBolsaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservaBolsa"> | string
    clienteId?: StringWithAggregatesFilter<"ReservaBolsa"> | string
    publicacionId?: StringWithAggregatesFilter<"ReservaBolsa"> | string
    unidades?: IntWithAggregatesFilter<"ReservaBolsa"> | number
    estado?: EnumEstadoBolsaWithAggregatesFilter<"ReservaBolsa"> | $Enums.EstadoBolsa
    codigo?: StringWithAggregatesFilter<"ReservaBolsa"> | string
    metodoPago?: EnumMetodoPagoWithAggregatesFilter<"ReservaBolsa"> | $Enums.MetodoPago
    creadoEn?: DateTimeWithAggregatesFilter<"ReservaBolsa"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"ReservaBolsa"> | Date | string
  }

  export type ResenaBolsaWhereInput = {
    AND?: ResenaBolsaWhereInput | ResenaBolsaWhereInput[]
    OR?: ResenaBolsaWhereInput[]
    NOT?: ResenaBolsaWhereInput | ResenaBolsaWhereInput[]
    id?: StringFilter<"ResenaBolsa"> | string
    reservaId?: StringFilter<"ResenaBolsa"> | string
    clienteId?: StringFilter<"ResenaBolsa"> | string
    rating?: IntFilter<"ResenaBolsa"> | number
    comentario?: StringNullableFilter<"ResenaBolsa"> | string | null
    creadoEn?: DateTimeFilter<"ResenaBolsa"> | Date | string
    reserva?: XOR<ReservaBolsaRelationFilter, ReservaBolsaWhereInput>
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type ResenaBolsaOrderByWithRelationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    reserva?: ReservaBolsaOrderByWithRelationInput
    cliente?: UsuarioOrderByWithRelationInput
  }

  export type ResenaBolsaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservaId?: string
    AND?: ResenaBolsaWhereInput | ResenaBolsaWhereInput[]
    OR?: ResenaBolsaWhereInput[]
    NOT?: ResenaBolsaWhereInput | ResenaBolsaWhereInput[]
    clienteId?: StringFilter<"ResenaBolsa"> | string
    rating?: IntFilter<"ResenaBolsa"> | number
    comentario?: StringNullableFilter<"ResenaBolsa"> | string | null
    creadoEn?: DateTimeFilter<"ResenaBolsa"> | Date | string
    reserva?: XOR<ReservaBolsaRelationFilter, ReservaBolsaWhereInput>
    cliente?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id" | "reservaId">

  export type ResenaBolsaOrderByWithAggregationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: ResenaBolsaCountOrderByAggregateInput
    _avg?: ResenaBolsaAvgOrderByAggregateInput
    _max?: ResenaBolsaMaxOrderByAggregateInput
    _min?: ResenaBolsaMinOrderByAggregateInput
    _sum?: ResenaBolsaSumOrderByAggregateInput
  }

  export type ResenaBolsaScalarWhereWithAggregatesInput = {
    AND?: ResenaBolsaScalarWhereWithAggregatesInput | ResenaBolsaScalarWhereWithAggregatesInput[]
    OR?: ResenaBolsaScalarWhereWithAggregatesInput[]
    NOT?: ResenaBolsaScalarWhereWithAggregatesInput | ResenaBolsaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResenaBolsa"> | string
    reservaId?: StringWithAggregatesFilter<"ResenaBolsa"> | string
    clienteId?: StringWithAggregatesFilter<"ResenaBolsa"> | string
    rating?: IntWithAggregatesFilter<"ResenaBolsa"> | number
    comentario?: StringNullableWithAggregatesFilter<"ResenaBolsa"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"ResenaBolsa"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteCreateNestedOneWithoutManagerInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaUncheckedCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaUncheckedCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaUncheckedCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteUncheckedCreateNestedOneWithoutManagerInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUpdateOneWithoutManagerNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUncheckedUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    manager: UsuarioCreateNestedOneWithoutRestauranteInput
    turnos?: TurnoCreateNestedManyWithoutRestauranteInput
    promos?: PromocionCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutRestauranteInput
    promos?: PromocionUncheckedCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UsuarioUpdateOneRequiredWithoutRestauranteNestedInput
    turnos?: TurnoUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUncheckedUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCreateManyInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestauranteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoCreateInput = {
    id?: string
    nombre: string
    diasSemana?: TurnoCreatediasSemanaInput | number[]
    horaInicio: string
    horaFin: string
    intervaloMin?: number
    capacidad: number
    activo?: boolean
    creadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutTurnosInput
  }

  export type TurnoUncheckedCreateInput = {
    id?: string
    restauranteId: string
    nombre: string
    diasSemana?: TurnoCreatediasSemanaInput | number[]
    horaInicio: string
    horaFin: string
    intervaloMin?: number
    capacidad: number
    activo?: boolean
    creadoEn?: Date | string
  }

  export type TurnoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type TurnoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoCreateManyInput = {
    id?: string
    restauranteId: string
    nombre: string
    diasSemana?: TurnoCreatediasSemanaInput | number[]
    horaInicio: string
    horaFin: string
    intervaloMin?: number
    capacidad: number
    activo?: boolean
    creadoEn?: Date | string
  }

  export type TurnoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionCreateInput = {
    id?: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPromosInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateInput = {
    id?: string
    restauranteId: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPromosNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionCreateManyInput = {
    id?: string
    restauranteId: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PromocionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaMesaCreateInput = {
    id?: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasMesaInput
    restaurante: RestauranteCreateNestedOneWithoutReservasMesaInput
    promocion?: PromocionCreateNestedOneWithoutReservasMesaInput
    resena?: ResenaMesaCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaUncheckedCreateInput = {
    id?: string
    clienteId: string
    restauranteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaMesaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasMesaNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutReservasMesaNestedInput
    promocion?: PromocionUpdateOneWithoutReservasMesaNestedInput
    resena?: ResenaMesaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaMesaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaCreateManyInput = {
    id?: string
    clienteId: string
    restauranteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaMesaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaMesaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaMesaCreateInput = {
    id?: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
    reserva: ReservaMesaCreateNestedOneWithoutResenaInput
    cliente: UsuarioCreateNestedOneWithoutResenasMesaInput
  }

  export type ResenaMesaUncheckedCreateInput = {
    id?: string
    reservaId: string
    clienteId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaMesaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaMesaUpdateOneRequiredWithoutResenaNestedInput
    cliente?: UsuarioUpdateOneRequiredWithoutResenasMesaNestedInput
  }

  export type ResenaMesaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaMesaCreateManyInput = {
    id?: string
    reservaId: string
    clienteId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaMesaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaMesaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolsaSorpresaPlantillaCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPlantillasBolsaInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutPlantillaInput
  }

  export type BolsaSorpresaPlantillaUncheckedCreateInput = {
    id?: string
    restauranteId: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutPlantillaInput
  }

  export type BolsaSorpresaPlantillaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPlantillasBolsaNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutPlantillaNestedInput
  }

  export type BolsaSorpresaPlantillaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutPlantillaNestedInput
  }

  export type BolsaSorpresaPlantillaCreateManyInput = {
    id?: string
    restauranteId: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type BolsaSorpresaPlantillaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolsaSorpresaPlantillaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionBolsaCreateInput = {
    id?: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPublicacionesInput
    plantilla: BolsaSorpresaPlantillaCreateNestedOneWithoutPublicacionesInput
    reservas?: ReservaBolsaCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionBolsaUncheckedCreateInput = {
    id?: string
    restauranteId: string
    plantillaId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservas?: ReservaBolsaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionBolsaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPublicacionesNestedInput
    plantilla?: BolsaSorpresaPlantillaUpdateOneRequiredWithoutPublicacionesNestedInput
    reservas?: ReservaBolsaUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionBolsaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    plantillaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaBolsaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionBolsaCreateManyInput = {
    id?: string
    restauranteId: string
    plantillaId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PublicacionBolsaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionBolsaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    plantillaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaBolsaCreateInput = {
    id?: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasBolsaInput
    publicacion: PublicacionBolsaCreateNestedOneWithoutReservasInput
    resena?: ResenaBolsaCreateNestedOneWithoutReservaInput
  }

  export type ReservaBolsaUncheckedCreateInput = {
    id?: string
    clienteId: string
    publicacionId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaBolsaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaBolsaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasBolsaNestedInput
    publicacion?: PublicacionBolsaUpdateOneRequiredWithoutReservasNestedInput
    resena?: ResenaBolsaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaBolsaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    publicacionId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaBolsaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaBolsaCreateManyInput = {
    id?: string
    clienteId: string
    publicacionId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaBolsaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaBolsaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    publicacionId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaBolsaCreateInput = {
    id?: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
    reserva: ReservaBolsaCreateNestedOneWithoutResenaInput
    cliente: UsuarioCreateNestedOneWithoutResenasBolsaInput
  }

  export type ResenaBolsaUncheckedCreateInput = {
    id?: string
    reservaId: string
    clienteId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaBolsaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaBolsaUpdateOneRequiredWithoutResenaNestedInput
    cliente?: UsuarioUpdateOneRequiredWithoutResenasBolsaNestedInput
  }

  export type ResenaBolsaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaBolsaCreateManyInput = {
    id?: string
    reservaId: string
    clienteId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaBolsaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaBolsaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReservaMesaListRelationFilter = {
    every?: ReservaMesaWhereInput
    some?: ReservaMesaWhereInput
    none?: ReservaMesaWhereInput
  }

  export type ReservaBolsaListRelationFilter = {
    every?: ReservaBolsaWhereInput
    some?: ReservaBolsaWhereInput
    none?: ReservaBolsaWhereInput
  }

  export type ResenaMesaListRelationFilter = {
    every?: ResenaMesaWhereInput
    some?: ResenaMesaWhereInput
    none?: ResenaMesaWhereInput
  }

  export type ResenaBolsaListRelationFilter = {
    every?: ResenaBolsaWhereInput
    some?: ResenaBolsaWhereInput
    none?: ResenaBolsaWhereInput
  }

  export type RestauranteNullableRelationFilter = {
    is?: RestauranteWhereInput | null
    isNot?: RestauranteWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservaMesaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservaBolsaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResenaMesaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResenaBolsaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    idioma?: SortOrder
    moneda?: SortOrder
    dietaPreferencia?: SortOrder
    puntos?: SortOrder
    noShowCount?: SortOrder
    altoRiesgo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    puntos?: SortOrder
    noShowCount?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    idioma?: SortOrder
    moneda?: SortOrder
    puntos?: SortOrder
    noShowCount?: SortOrder
    altoRiesgo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    idioma?: SortOrder
    moneda?: SortOrder
    puntos?: SortOrder
    noShowCount?: SortOrder
    altoRiesgo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    puntos?: SortOrder
    noShowCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEstadoRestauranteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRestaurante | EnumEstadoRestauranteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRestauranteFilter<$PrismaModel> | $Enums.EstadoRestaurante
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TurnoListRelationFilter = {
    every?: TurnoWhereInput
    some?: TurnoWhereInput
    none?: TurnoWhereInput
  }

  export type PromocionListRelationFilter = {
    every?: PromocionWhereInput
    some?: PromocionWhereInput
    none?: PromocionWhereInput
  }

  export type BolsaSorpresaPlantillaListRelationFilter = {
    every?: BolsaSorpresaPlantillaWhereInput
    some?: BolsaSorpresaPlantillaWhereInput
    none?: BolsaSorpresaPlantillaWhereInput
  }

  export type PublicacionBolsaListRelationFilter = {
    every?: PublicacionBolsaWhereInput
    some?: PublicacionBolsaWhereInput
    none?: PublicacionBolsaWhereInput
  }

  export type TurnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromocionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BolsaSorpresaPlantillaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicacionBolsaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestauranteCountOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    sitioWeb?: SortOrder
    tipoCocina?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
    estado?: SortOrder
    servicios?: SortOrder
    fotos?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type RestauranteAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
  }

  export type RestauranteMaxOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    sitioWeb?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type RestauranteMinOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    sitioWeb?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type RestauranteSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    precioMedio?: SortOrder
    capacidadTotal?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEstadoRestauranteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRestaurante | EnumEstadoRestauranteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRestauranteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoRestaurante
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoRestauranteFilter<$PrismaModel>
    _max?: NestedEnumEstadoRestauranteFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RestauranteRelationFilter = {
    is?: RestauranteWhereInput
    isNot?: RestauranteWhereInput
  }

  export type TurnoCountOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    diasSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
  }

  export type TurnoAvgOrderByAggregateInput = {
    diasSemana?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
  }

  export type TurnoMaxOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
  }

  export type TurnoMinOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
  }

  export type TurnoSumOrderByAggregateInput = {
    diasSemana?: SortOrder
    intervaloMin?: SortOrder
    capacidad?: SortOrder
  }

  export type EnumTipoPromoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPromo | EnumTipoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPromoFilter<$PrismaModel> | $Enums.TipoPromo
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEstadoPromoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPromo | EnumEstadoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPromoFilter<$PrismaModel> | $Enums.EstadoPromo
  }

  export type PromocionCountOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    condiciones?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    diasSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PromocionAvgOrderByAggregateInput = {
    valor?: SortOrder
    diasSemana?: SortOrder
  }

  export type PromocionMaxOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    condiciones?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PromocionMinOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    condiciones?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PromocionSumOrderByAggregateInput = {
    valor?: SortOrder
    diasSemana?: SortOrder
  }

  export type EnumTipoPromoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPromo | EnumTipoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPromoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPromo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPromoFilter<$PrismaModel>
    _max?: NestedEnumTipoPromoFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEstadoPromoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPromo | EnumEstadoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPromoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPromo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPromoFilter<$PrismaModel>
    _max?: NestedEnumEstadoPromoFilter<$PrismaModel>
  }

  export type EnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type PromocionNullableRelationFilter = {
    is?: PromocionWhereInput | null
    isNot?: PromocionWhereInput | null
  }

  export type ResenaMesaNullableRelationFilter = {
    is?: ResenaMesaWhereInput | null
    isNot?: ResenaMesaWhereInput | null
  }

  export type ReservaMesaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    promocionId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    comensales?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    notas?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ReservaMesaAvgOrderByAggregateInput = {
    comensales?: SortOrder
  }

  export type ReservaMesaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    promocionId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    comensales?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    notas?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ReservaMesaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    promocionId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    comensales?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    notas?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ReservaMesaSumOrderByAggregateInput = {
    comensales?: SortOrder
  }

  export type EnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
  }

  export type ReservaMesaRelationFilter = {
    is?: ReservaMesaWhereInput
    isNot?: ReservaMesaWhereInput
  }

  export type ResenaMesaCountOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrder
    creadoEn?: SortOrder
  }

  export type ResenaMesaAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ResenaMesaMaxOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrder
    creadoEn?: SortOrder
  }

  export type ResenaMesaMinOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrder
    creadoEn?: SortOrder
  }

  export type ResenaMesaSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type BolsaSorpresaPlantillaCountOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    valorEstimado?: SortOrder
    etiquetasDieta?: SortOrder
    tipComida?: SortOrder
    condiciones?: SortOrder
    politicaReembolso?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type BolsaSorpresaPlantillaAvgOrderByAggregateInput = {
    precio?: SortOrder
    valorEstimado?: SortOrder
  }

  export type BolsaSorpresaPlantillaMaxOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    valorEstimado?: SortOrder
    condiciones?: SortOrder
    politicaReembolso?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type BolsaSorpresaPlantillaMinOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    valorEstimado?: SortOrder
    condiciones?: SortOrder
    politicaReembolso?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type BolsaSorpresaPlantillaSumOrderByAggregateInput = {
    precio?: SortOrder
    valorEstimado?: SortOrder
  }

  export type EnumEstadoPublicacionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPublicacion | EnumEstadoPublicacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPublicacionFilter<$PrismaModel> | $Enums.EstadoPublicacion
  }

  export type BolsaSorpresaPlantillaRelationFilter = {
    is?: BolsaSorpresaPlantillaWhereInput
    isNot?: BolsaSorpresaPlantillaWhereInput
  }

  export type PublicacionBolsaCountOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    plantillaId?: SortOrder
    fecha?: SortOrder
    franjaInicio?: SortOrder
    franjaFin?: SortOrder
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PublicacionBolsaAvgOrderByAggregateInput = {
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
  }

  export type PublicacionBolsaMaxOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    plantillaId?: SortOrder
    fecha?: SortOrder
    franjaInicio?: SortOrder
    franjaFin?: SortOrder
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PublicacionBolsaMinOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    plantillaId?: SortOrder
    fecha?: SortOrder
    franjaInicio?: SortOrder
    franjaFin?: SortOrder
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PublicacionBolsaSumOrderByAggregateInput = {
    unidadesTotales?: SortOrder
    unidadesVendidas?: SortOrder
  }

  export type EnumEstadoPublicacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPublicacion | EnumEstadoPublicacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPublicacionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPublicacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPublicacionFilter<$PrismaModel>
    _max?: NestedEnumEstadoPublicacionFilter<$PrismaModel>
  }

  export type EnumEstadoBolsaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBolsa | EnumEstadoBolsaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBolsaFilter<$PrismaModel> | $Enums.EstadoBolsa
  }

  export type EnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type PublicacionBolsaRelationFilter = {
    is?: PublicacionBolsaWhereInput
    isNot?: PublicacionBolsaWhereInput
  }

  export type ResenaBolsaNullableRelationFilter = {
    is?: ResenaBolsaWhereInput | null
    isNot?: ResenaBolsaWhereInput | null
  }

  export type ReservaBolsaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    publicacionId?: SortOrder
    unidades?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    metodoPago?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ReservaBolsaAvgOrderByAggregateInput = {
    unidades?: SortOrder
  }

  export type ReservaBolsaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    publicacionId?: SortOrder
    unidades?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    metodoPago?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ReservaBolsaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    publicacionId?: SortOrder
    unidades?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    metodoPago?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ReservaBolsaSumOrderByAggregateInput = {
    unidades?: SortOrder
  }

  export type EnumEstadoBolsaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBolsa | EnumEstadoBolsaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBolsaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBolsa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBolsaFilter<$PrismaModel>
    _max?: NestedEnumEstadoBolsaFilter<$PrismaModel>
  }

  export type EnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type ReservaBolsaRelationFilter = {
    is?: ReservaBolsaWhereInput
    isNot?: ReservaBolsaWhereInput
  }

  export type ResenaBolsaCountOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrder
    creadoEn?: SortOrder
  }

  export type ResenaBolsaAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ResenaBolsaMaxOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrder
    creadoEn?: SortOrder
  }

  export type ResenaBolsaMinOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    clienteId?: SortOrder
    rating?: SortOrder
    comentario?: SortOrder
    creadoEn?: SortOrder
  }

  export type ResenaBolsaSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UsuarioCreatedietaPreferenciaInput = {
    set: string[]
  }

  export type ReservaMesaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaMesaCreateWithoutClienteInput, ReservaMesaUncheckedCreateWithoutClienteInput> | ReservaMesaCreateWithoutClienteInput[] | ReservaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutClienteInput | ReservaMesaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaMesaCreateManyClienteInputEnvelope
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
  }

  export type ReservaBolsaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaBolsaCreateWithoutClienteInput, ReservaBolsaUncheckedCreateWithoutClienteInput> | ReservaBolsaCreateWithoutClienteInput[] | ReservaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutClienteInput | ReservaBolsaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaBolsaCreateManyClienteInputEnvelope
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
  }

  export type ResenaMesaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ResenaMesaCreateWithoutClienteInput, ResenaMesaUncheckedCreateWithoutClienteInput> | ResenaMesaCreateWithoutClienteInput[] | ResenaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutClienteInput | ResenaMesaCreateOrConnectWithoutClienteInput[]
    createMany?: ResenaMesaCreateManyClienteInputEnvelope
    connect?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
  }

  export type ResenaBolsaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ResenaBolsaCreateWithoutClienteInput, ResenaBolsaUncheckedCreateWithoutClienteInput> | ResenaBolsaCreateWithoutClienteInput[] | ResenaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutClienteInput | ResenaBolsaCreateOrConnectWithoutClienteInput[]
    createMany?: ResenaBolsaCreateManyClienteInputEnvelope
    connect?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
  }

  export type RestauranteCreateNestedOneWithoutManagerInput = {
    create?: XOR<RestauranteCreateWithoutManagerInput, RestauranteUncheckedCreateWithoutManagerInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutManagerInput
    connect?: RestauranteWhereUniqueInput
  }

  export type ReservaMesaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaMesaCreateWithoutClienteInput, ReservaMesaUncheckedCreateWithoutClienteInput> | ReservaMesaCreateWithoutClienteInput[] | ReservaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutClienteInput | ReservaMesaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaMesaCreateManyClienteInputEnvelope
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
  }

  export type ReservaBolsaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaBolsaCreateWithoutClienteInput, ReservaBolsaUncheckedCreateWithoutClienteInput> | ReservaBolsaCreateWithoutClienteInput[] | ReservaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutClienteInput | ReservaBolsaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaBolsaCreateManyClienteInputEnvelope
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
  }

  export type ResenaMesaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ResenaMesaCreateWithoutClienteInput, ResenaMesaUncheckedCreateWithoutClienteInput> | ResenaMesaCreateWithoutClienteInput[] | ResenaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutClienteInput | ResenaMesaCreateOrConnectWithoutClienteInput[]
    createMany?: ResenaMesaCreateManyClienteInputEnvelope
    connect?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
  }

  export type ResenaBolsaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ResenaBolsaCreateWithoutClienteInput, ResenaBolsaUncheckedCreateWithoutClienteInput> | ResenaBolsaCreateWithoutClienteInput[] | ResenaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutClienteInput | ResenaBolsaCreateOrConnectWithoutClienteInput[]
    createMany?: ResenaBolsaCreateManyClienteInputEnvelope
    connect?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
  }

  export type RestauranteUncheckedCreateNestedOneWithoutManagerInput = {
    create?: XOR<RestauranteCreateWithoutManagerInput, RestauranteUncheckedCreateWithoutManagerInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutManagerInput
    connect?: RestauranteWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type UsuarioUpdatedietaPreferenciaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaMesaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutClienteInput, ReservaMesaUncheckedCreateWithoutClienteInput> | ReservaMesaCreateWithoutClienteInput[] | ReservaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutClienteInput | ReservaMesaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaMesaUpsertWithWhereUniqueWithoutClienteInput | ReservaMesaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaMesaCreateManyClienteInputEnvelope
    set?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    disconnect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    delete?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    update?: ReservaMesaUpdateWithWhereUniqueWithoutClienteInput | ReservaMesaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaMesaUpdateManyWithWhereWithoutClienteInput | ReservaMesaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
  }

  export type ReservaBolsaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaBolsaCreateWithoutClienteInput, ReservaBolsaUncheckedCreateWithoutClienteInput> | ReservaBolsaCreateWithoutClienteInput[] | ReservaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutClienteInput | ReservaBolsaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaBolsaUpsertWithWhereUniqueWithoutClienteInput | ReservaBolsaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaBolsaCreateManyClienteInputEnvelope
    set?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    disconnect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    delete?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    update?: ReservaBolsaUpdateWithWhereUniqueWithoutClienteInput | ReservaBolsaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaBolsaUpdateManyWithWhereWithoutClienteInput | ReservaBolsaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaBolsaScalarWhereInput | ReservaBolsaScalarWhereInput[]
  }

  export type ResenaMesaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ResenaMesaCreateWithoutClienteInput, ResenaMesaUncheckedCreateWithoutClienteInput> | ResenaMesaCreateWithoutClienteInput[] | ResenaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutClienteInput | ResenaMesaCreateOrConnectWithoutClienteInput[]
    upsert?: ResenaMesaUpsertWithWhereUniqueWithoutClienteInput | ResenaMesaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ResenaMesaCreateManyClienteInputEnvelope
    set?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    disconnect?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    delete?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    connect?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    update?: ResenaMesaUpdateWithWhereUniqueWithoutClienteInput | ResenaMesaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ResenaMesaUpdateManyWithWhereWithoutClienteInput | ResenaMesaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ResenaMesaScalarWhereInput | ResenaMesaScalarWhereInput[]
  }

  export type ResenaBolsaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ResenaBolsaCreateWithoutClienteInput, ResenaBolsaUncheckedCreateWithoutClienteInput> | ResenaBolsaCreateWithoutClienteInput[] | ResenaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutClienteInput | ResenaBolsaCreateOrConnectWithoutClienteInput[]
    upsert?: ResenaBolsaUpsertWithWhereUniqueWithoutClienteInput | ResenaBolsaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ResenaBolsaCreateManyClienteInputEnvelope
    set?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    disconnect?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    delete?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    connect?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    update?: ResenaBolsaUpdateWithWhereUniqueWithoutClienteInput | ResenaBolsaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ResenaBolsaUpdateManyWithWhereWithoutClienteInput | ResenaBolsaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ResenaBolsaScalarWhereInput | ResenaBolsaScalarWhereInput[]
  }

  export type RestauranteUpdateOneWithoutManagerNestedInput = {
    create?: XOR<RestauranteCreateWithoutManagerInput, RestauranteUncheckedCreateWithoutManagerInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutManagerInput
    upsert?: RestauranteUpsertWithoutManagerInput
    disconnect?: RestauranteWhereInput | boolean
    delete?: RestauranteWhereInput | boolean
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutManagerInput, RestauranteUpdateWithoutManagerInput>, RestauranteUncheckedUpdateWithoutManagerInput>
  }

  export type ReservaMesaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutClienteInput, ReservaMesaUncheckedCreateWithoutClienteInput> | ReservaMesaCreateWithoutClienteInput[] | ReservaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutClienteInput | ReservaMesaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaMesaUpsertWithWhereUniqueWithoutClienteInput | ReservaMesaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaMesaCreateManyClienteInputEnvelope
    set?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    disconnect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    delete?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    update?: ReservaMesaUpdateWithWhereUniqueWithoutClienteInput | ReservaMesaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaMesaUpdateManyWithWhereWithoutClienteInput | ReservaMesaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
  }

  export type ReservaBolsaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaBolsaCreateWithoutClienteInput, ReservaBolsaUncheckedCreateWithoutClienteInput> | ReservaBolsaCreateWithoutClienteInput[] | ReservaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutClienteInput | ReservaBolsaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaBolsaUpsertWithWhereUniqueWithoutClienteInput | ReservaBolsaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaBolsaCreateManyClienteInputEnvelope
    set?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    disconnect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    delete?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    update?: ReservaBolsaUpdateWithWhereUniqueWithoutClienteInput | ReservaBolsaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaBolsaUpdateManyWithWhereWithoutClienteInput | ReservaBolsaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaBolsaScalarWhereInput | ReservaBolsaScalarWhereInput[]
  }

  export type ResenaMesaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ResenaMesaCreateWithoutClienteInput, ResenaMesaUncheckedCreateWithoutClienteInput> | ResenaMesaCreateWithoutClienteInput[] | ResenaMesaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutClienteInput | ResenaMesaCreateOrConnectWithoutClienteInput[]
    upsert?: ResenaMesaUpsertWithWhereUniqueWithoutClienteInput | ResenaMesaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ResenaMesaCreateManyClienteInputEnvelope
    set?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    disconnect?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    delete?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    connect?: ResenaMesaWhereUniqueInput | ResenaMesaWhereUniqueInput[]
    update?: ResenaMesaUpdateWithWhereUniqueWithoutClienteInput | ResenaMesaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ResenaMesaUpdateManyWithWhereWithoutClienteInput | ResenaMesaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ResenaMesaScalarWhereInput | ResenaMesaScalarWhereInput[]
  }

  export type ResenaBolsaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ResenaBolsaCreateWithoutClienteInput, ResenaBolsaUncheckedCreateWithoutClienteInput> | ResenaBolsaCreateWithoutClienteInput[] | ResenaBolsaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutClienteInput | ResenaBolsaCreateOrConnectWithoutClienteInput[]
    upsert?: ResenaBolsaUpsertWithWhereUniqueWithoutClienteInput | ResenaBolsaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ResenaBolsaCreateManyClienteInputEnvelope
    set?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    disconnect?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    delete?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    connect?: ResenaBolsaWhereUniqueInput | ResenaBolsaWhereUniqueInput[]
    update?: ResenaBolsaUpdateWithWhereUniqueWithoutClienteInput | ResenaBolsaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ResenaBolsaUpdateManyWithWhereWithoutClienteInput | ResenaBolsaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ResenaBolsaScalarWhereInput | ResenaBolsaScalarWhereInput[]
  }

  export type RestauranteUncheckedUpdateOneWithoutManagerNestedInput = {
    create?: XOR<RestauranteCreateWithoutManagerInput, RestauranteUncheckedCreateWithoutManagerInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutManagerInput
    upsert?: RestauranteUpsertWithoutManagerInput
    disconnect?: RestauranteWhereInput | boolean
    delete?: RestauranteWhereInput | boolean
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutManagerInput, RestauranteUpdateWithoutManagerInput>, RestauranteUncheckedUpdateWithoutManagerInput>
  }

  export type RestauranteCreatetipoCocinaInput = {
    set: string[]
  }

  export type RestauranteCreatefotosInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutRestauranteInput = {
    create?: XOR<UsuarioCreateWithoutRestauranteInput, UsuarioUncheckedCreateWithoutRestauranteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRestauranteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TurnoCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<TurnoCreateWithoutRestauranteInput, TurnoUncheckedCreateWithoutRestauranteInput> | TurnoCreateWithoutRestauranteInput[] | TurnoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRestauranteInput | TurnoCreateOrConnectWithoutRestauranteInput[]
    createMany?: TurnoCreateManyRestauranteInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type PromocionCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PromocionCreateWithoutRestauranteInput, PromocionUncheckedCreateWithoutRestauranteInput> | PromocionCreateWithoutRestauranteInput[] | PromocionUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutRestauranteInput | PromocionCreateOrConnectWithoutRestauranteInput[]
    createMany?: PromocionCreateManyRestauranteInputEnvelope
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
  }

  export type ReservaMesaCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ReservaMesaCreateWithoutRestauranteInput, ReservaMesaUncheckedCreateWithoutRestauranteInput> | ReservaMesaCreateWithoutRestauranteInput[] | ReservaMesaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutRestauranteInput | ReservaMesaCreateOrConnectWithoutRestauranteInput[]
    createMany?: ReservaMesaCreateManyRestauranteInputEnvelope
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
  }

  export type BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<BolsaSorpresaPlantillaCreateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput> | BolsaSorpresaPlantillaCreateWithoutRestauranteInput[] | BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput | BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput[]
    createMany?: BolsaSorpresaPlantillaCreateManyRestauranteInputEnvelope
    connect?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
  }

  export type PublicacionBolsaCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PublicacionBolsaCreateWithoutRestauranteInput, PublicacionBolsaUncheckedCreateWithoutRestauranteInput> | PublicacionBolsaCreateWithoutRestauranteInput[] | PublicacionBolsaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutRestauranteInput | PublicacionBolsaCreateOrConnectWithoutRestauranteInput[]
    createMany?: PublicacionBolsaCreateManyRestauranteInputEnvelope
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<TurnoCreateWithoutRestauranteInput, TurnoUncheckedCreateWithoutRestauranteInput> | TurnoCreateWithoutRestauranteInput[] | TurnoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRestauranteInput | TurnoCreateOrConnectWithoutRestauranteInput[]
    createMany?: TurnoCreateManyRestauranteInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type PromocionUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PromocionCreateWithoutRestauranteInput, PromocionUncheckedCreateWithoutRestauranteInput> | PromocionCreateWithoutRestauranteInput[] | PromocionUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutRestauranteInput | PromocionCreateOrConnectWithoutRestauranteInput[]
    createMany?: PromocionCreateManyRestauranteInputEnvelope
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
  }

  export type ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ReservaMesaCreateWithoutRestauranteInput, ReservaMesaUncheckedCreateWithoutRestauranteInput> | ReservaMesaCreateWithoutRestauranteInput[] | ReservaMesaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutRestauranteInput | ReservaMesaCreateOrConnectWithoutRestauranteInput[]
    createMany?: ReservaMesaCreateManyRestauranteInputEnvelope
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
  }

  export type BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<BolsaSorpresaPlantillaCreateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput> | BolsaSorpresaPlantillaCreateWithoutRestauranteInput[] | BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput | BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput[]
    createMany?: BolsaSorpresaPlantillaCreateManyRestauranteInputEnvelope
    connect?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
  }

  export type PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PublicacionBolsaCreateWithoutRestauranteInput, PublicacionBolsaUncheckedCreateWithoutRestauranteInput> | PublicacionBolsaCreateWithoutRestauranteInput[] | PublicacionBolsaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutRestauranteInput | PublicacionBolsaCreateOrConnectWithoutRestauranteInput[]
    createMany?: PublicacionBolsaCreateManyRestauranteInputEnvelope
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestauranteUpdatetipoCocinaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumEstadoRestauranteFieldUpdateOperationsInput = {
    set?: $Enums.EstadoRestaurante
  }

  export type RestauranteUpdatefotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsuarioUpdateOneRequiredWithoutRestauranteNestedInput = {
    create?: XOR<UsuarioCreateWithoutRestauranteInput, UsuarioUncheckedCreateWithoutRestauranteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRestauranteInput
    upsert?: UsuarioUpsertWithoutRestauranteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRestauranteInput, UsuarioUpdateWithoutRestauranteInput>, UsuarioUncheckedUpdateWithoutRestauranteInput>
  }

  export type TurnoUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<TurnoCreateWithoutRestauranteInput, TurnoUncheckedCreateWithoutRestauranteInput> | TurnoCreateWithoutRestauranteInput[] | TurnoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRestauranteInput | TurnoCreateOrConnectWithoutRestauranteInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutRestauranteInput | TurnoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: TurnoCreateManyRestauranteInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutRestauranteInput | TurnoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutRestauranteInput | TurnoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type PromocionUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PromocionCreateWithoutRestauranteInput, PromocionUncheckedCreateWithoutRestauranteInput> | PromocionCreateWithoutRestauranteInput[] | PromocionUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutRestauranteInput | PromocionCreateOrConnectWithoutRestauranteInput[]
    upsert?: PromocionUpsertWithWhereUniqueWithoutRestauranteInput | PromocionUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PromocionCreateManyRestauranteInputEnvelope
    set?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    disconnect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    delete?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    update?: PromocionUpdateWithWhereUniqueWithoutRestauranteInput | PromocionUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PromocionUpdateManyWithWhereWithoutRestauranteInput | PromocionUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
  }

  export type ReservaMesaUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutRestauranteInput, ReservaMesaUncheckedCreateWithoutRestauranteInput> | ReservaMesaCreateWithoutRestauranteInput[] | ReservaMesaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutRestauranteInput | ReservaMesaCreateOrConnectWithoutRestauranteInput[]
    upsert?: ReservaMesaUpsertWithWhereUniqueWithoutRestauranteInput | ReservaMesaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ReservaMesaCreateManyRestauranteInputEnvelope
    set?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    disconnect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    delete?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    update?: ReservaMesaUpdateWithWhereUniqueWithoutRestauranteInput | ReservaMesaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ReservaMesaUpdateManyWithWhereWithoutRestauranteInput | ReservaMesaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
  }

  export type BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<BolsaSorpresaPlantillaCreateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput> | BolsaSorpresaPlantillaCreateWithoutRestauranteInput[] | BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput | BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput[]
    upsert?: BolsaSorpresaPlantillaUpsertWithWhereUniqueWithoutRestauranteInput | BolsaSorpresaPlantillaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: BolsaSorpresaPlantillaCreateManyRestauranteInputEnvelope
    set?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    disconnect?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    delete?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    connect?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    update?: BolsaSorpresaPlantillaUpdateWithWhereUniqueWithoutRestauranteInput | BolsaSorpresaPlantillaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: BolsaSorpresaPlantillaUpdateManyWithWhereWithoutRestauranteInput | BolsaSorpresaPlantillaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: BolsaSorpresaPlantillaScalarWhereInput | BolsaSorpresaPlantillaScalarWhereInput[]
  }

  export type PublicacionBolsaUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PublicacionBolsaCreateWithoutRestauranteInput, PublicacionBolsaUncheckedCreateWithoutRestauranteInput> | PublicacionBolsaCreateWithoutRestauranteInput[] | PublicacionBolsaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutRestauranteInput | PublicacionBolsaCreateOrConnectWithoutRestauranteInput[]
    upsert?: PublicacionBolsaUpsertWithWhereUniqueWithoutRestauranteInput | PublicacionBolsaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PublicacionBolsaCreateManyRestauranteInputEnvelope
    set?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    disconnect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    delete?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    update?: PublicacionBolsaUpdateWithWhereUniqueWithoutRestauranteInput | PublicacionBolsaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PublicacionBolsaUpdateManyWithWhereWithoutRestauranteInput | PublicacionBolsaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PublicacionBolsaScalarWhereInput | PublicacionBolsaScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<TurnoCreateWithoutRestauranteInput, TurnoUncheckedCreateWithoutRestauranteInput> | TurnoCreateWithoutRestauranteInput[] | TurnoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRestauranteInput | TurnoCreateOrConnectWithoutRestauranteInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutRestauranteInput | TurnoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: TurnoCreateManyRestauranteInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutRestauranteInput | TurnoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutRestauranteInput | TurnoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type PromocionUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PromocionCreateWithoutRestauranteInput, PromocionUncheckedCreateWithoutRestauranteInput> | PromocionCreateWithoutRestauranteInput[] | PromocionUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PromocionCreateOrConnectWithoutRestauranteInput | PromocionCreateOrConnectWithoutRestauranteInput[]
    upsert?: PromocionUpsertWithWhereUniqueWithoutRestauranteInput | PromocionUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PromocionCreateManyRestauranteInputEnvelope
    set?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    disconnect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    delete?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    connect?: PromocionWhereUniqueInput | PromocionWhereUniqueInput[]
    update?: PromocionUpdateWithWhereUniqueWithoutRestauranteInput | PromocionUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PromocionUpdateManyWithWhereWithoutRestauranteInput | PromocionUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
  }

  export type ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutRestauranteInput, ReservaMesaUncheckedCreateWithoutRestauranteInput> | ReservaMesaCreateWithoutRestauranteInput[] | ReservaMesaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutRestauranteInput | ReservaMesaCreateOrConnectWithoutRestauranteInput[]
    upsert?: ReservaMesaUpsertWithWhereUniqueWithoutRestauranteInput | ReservaMesaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ReservaMesaCreateManyRestauranteInputEnvelope
    set?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    disconnect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    delete?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    update?: ReservaMesaUpdateWithWhereUniqueWithoutRestauranteInput | ReservaMesaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ReservaMesaUpdateManyWithWhereWithoutRestauranteInput | ReservaMesaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
  }

  export type BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<BolsaSorpresaPlantillaCreateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput> | BolsaSorpresaPlantillaCreateWithoutRestauranteInput[] | BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput | BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput[]
    upsert?: BolsaSorpresaPlantillaUpsertWithWhereUniqueWithoutRestauranteInput | BolsaSorpresaPlantillaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: BolsaSorpresaPlantillaCreateManyRestauranteInputEnvelope
    set?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    disconnect?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    delete?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    connect?: BolsaSorpresaPlantillaWhereUniqueInput | BolsaSorpresaPlantillaWhereUniqueInput[]
    update?: BolsaSorpresaPlantillaUpdateWithWhereUniqueWithoutRestauranteInput | BolsaSorpresaPlantillaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: BolsaSorpresaPlantillaUpdateManyWithWhereWithoutRestauranteInput | BolsaSorpresaPlantillaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: BolsaSorpresaPlantillaScalarWhereInput | BolsaSorpresaPlantillaScalarWhereInput[]
  }

  export type PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PublicacionBolsaCreateWithoutRestauranteInput, PublicacionBolsaUncheckedCreateWithoutRestauranteInput> | PublicacionBolsaCreateWithoutRestauranteInput[] | PublicacionBolsaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutRestauranteInput | PublicacionBolsaCreateOrConnectWithoutRestauranteInput[]
    upsert?: PublicacionBolsaUpsertWithWhereUniqueWithoutRestauranteInput | PublicacionBolsaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PublicacionBolsaCreateManyRestauranteInputEnvelope
    set?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    disconnect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    delete?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    update?: PublicacionBolsaUpdateWithWhereUniqueWithoutRestauranteInput | PublicacionBolsaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PublicacionBolsaUpdateManyWithWhereWithoutRestauranteInput | PublicacionBolsaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PublicacionBolsaScalarWhereInput | PublicacionBolsaScalarWhereInput[]
  }

  export type TurnoCreatediasSemanaInput = {
    set: number[]
  }

  export type RestauranteCreateNestedOneWithoutTurnosInput = {
    create?: XOR<RestauranteCreateWithoutTurnosInput, RestauranteUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutTurnosInput
    connect?: RestauranteWhereUniqueInput
  }

  export type TurnoUpdatediasSemanaInput = {
    set?: number[]
    push?: number | number[]
  }

  export type RestauranteUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<RestauranteCreateWithoutTurnosInput, RestauranteUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutTurnosInput
    upsert?: RestauranteUpsertWithoutTurnosInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutTurnosInput, RestauranteUpdateWithoutTurnosInput>, RestauranteUncheckedUpdateWithoutTurnosInput>
  }

  export type PromocionCreatediasSemanaInput = {
    set: number[]
  }

  export type RestauranteCreateNestedOneWithoutPromosInput = {
    create?: XOR<RestauranteCreateWithoutPromosInput, RestauranteUncheckedCreateWithoutPromosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPromosInput
    connect?: RestauranteWhereUniqueInput
  }

  export type ReservaMesaCreateNestedManyWithoutPromocionInput = {
    create?: XOR<ReservaMesaCreateWithoutPromocionInput, ReservaMesaUncheckedCreateWithoutPromocionInput> | ReservaMesaCreateWithoutPromocionInput[] | ReservaMesaUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutPromocionInput | ReservaMesaCreateOrConnectWithoutPromocionInput[]
    createMany?: ReservaMesaCreateManyPromocionInputEnvelope
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
  }

  export type ReservaMesaUncheckedCreateNestedManyWithoutPromocionInput = {
    create?: XOR<ReservaMesaCreateWithoutPromocionInput, ReservaMesaUncheckedCreateWithoutPromocionInput> | ReservaMesaCreateWithoutPromocionInput[] | ReservaMesaUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutPromocionInput | ReservaMesaCreateOrConnectWithoutPromocionInput[]
    createMany?: ReservaMesaCreateManyPromocionInputEnvelope
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
  }

  export type EnumTipoPromoFieldUpdateOperationsInput = {
    set?: $Enums.TipoPromo
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PromocionUpdatediasSemanaInput = {
    set?: number[]
    push?: number | number[]
  }

  export type EnumEstadoPromoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPromo
  }

  export type RestauranteUpdateOneRequiredWithoutPromosNestedInput = {
    create?: XOR<RestauranteCreateWithoutPromosInput, RestauranteUncheckedCreateWithoutPromosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPromosInput
    upsert?: RestauranteUpsertWithoutPromosInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutPromosInput, RestauranteUpdateWithoutPromosInput>, RestauranteUncheckedUpdateWithoutPromosInput>
  }

  export type ReservaMesaUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutPromocionInput, ReservaMesaUncheckedCreateWithoutPromocionInput> | ReservaMesaCreateWithoutPromocionInput[] | ReservaMesaUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutPromocionInput | ReservaMesaCreateOrConnectWithoutPromocionInput[]
    upsert?: ReservaMesaUpsertWithWhereUniqueWithoutPromocionInput | ReservaMesaUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: ReservaMesaCreateManyPromocionInputEnvelope
    set?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    disconnect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    delete?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    update?: ReservaMesaUpdateWithWhereUniqueWithoutPromocionInput | ReservaMesaUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: ReservaMesaUpdateManyWithWhereWithoutPromocionInput | ReservaMesaUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
  }

  export type ReservaMesaUncheckedUpdateManyWithoutPromocionNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutPromocionInput, ReservaMesaUncheckedCreateWithoutPromocionInput> | ReservaMesaCreateWithoutPromocionInput[] | ReservaMesaUncheckedCreateWithoutPromocionInput[]
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutPromocionInput | ReservaMesaCreateOrConnectWithoutPromocionInput[]
    upsert?: ReservaMesaUpsertWithWhereUniqueWithoutPromocionInput | ReservaMesaUpsertWithWhereUniqueWithoutPromocionInput[]
    createMany?: ReservaMesaCreateManyPromocionInputEnvelope
    set?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    disconnect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    delete?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    connect?: ReservaMesaWhereUniqueInput | ReservaMesaWhereUniqueInput[]
    update?: ReservaMesaUpdateWithWhereUniqueWithoutPromocionInput | ReservaMesaUpdateWithWhereUniqueWithoutPromocionInput[]
    updateMany?: ReservaMesaUpdateManyWithWhereWithoutPromocionInput | ReservaMesaUpdateManyWithWhereWithoutPromocionInput[]
    deleteMany?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutReservasMesaInput = {
    create?: XOR<UsuarioCreateWithoutReservasMesaInput, UsuarioUncheckedCreateWithoutReservasMesaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasMesaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RestauranteCreateNestedOneWithoutReservasMesaInput = {
    create?: XOR<RestauranteCreateWithoutReservasMesaInput, RestauranteUncheckedCreateWithoutReservasMesaInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutReservasMesaInput
    connect?: RestauranteWhereUniqueInput
  }

  export type PromocionCreateNestedOneWithoutReservasMesaInput = {
    create?: XOR<PromocionCreateWithoutReservasMesaInput, PromocionUncheckedCreateWithoutReservasMesaInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutReservasMesaInput
    connect?: PromocionWhereUniqueInput
  }

  export type ResenaMesaCreateNestedOneWithoutReservaInput = {
    create?: XOR<ResenaMesaCreateWithoutReservaInput, ResenaMesaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutReservaInput
    connect?: ResenaMesaWhereUniqueInput
  }

  export type ResenaMesaUncheckedCreateNestedOneWithoutReservaInput = {
    create?: XOR<ResenaMesaCreateWithoutReservaInput, ResenaMesaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutReservaInput
    connect?: ResenaMesaWhereUniqueInput
  }

  export type EnumEstadoReservaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoReserva
  }

  export type UsuarioUpdateOneRequiredWithoutReservasMesaNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasMesaInput, UsuarioUncheckedCreateWithoutReservasMesaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasMesaInput
    upsert?: UsuarioUpsertWithoutReservasMesaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasMesaInput, UsuarioUpdateWithoutReservasMesaInput>, UsuarioUncheckedUpdateWithoutReservasMesaInput>
  }

  export type RestauranteUpdateOneRequiredWithoutReservasMesaNestedInput = {
    create?: XOR<RestauranteCreateWithoutReservasMesaInput, RestauranteUncheckedCreateWithoutReservasMesaInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutReservasMesaInput
    upsert?: RestauranteUpsertWithoutReservasMesaInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutReservasMesaInput, RestauranteUpdateWithoutReservasMesaInput>, RestauranteUncheckedUpdateWithoutReservasMesaInput>
  }

  export type PromocionUpdateOneWithoutReservasMesaNestedInput = {
    create?: XOR<PromocionCreateWithoutReservasMesaInput, PromocionUncheckedCreateWithoutReservasMesaInput>
    connectOrCreate?: PromocionCreateOrConnectWithoutReservasMesaInput
    upsert?: PromocionUpsertWithoutReservasMesaInput
    disconnect?: PromocionWhereInput | boolean
    delete?: PromocionWhereInput | boolean
    connect?: PromocionWhereUniqueInput
    update?: XOR<XOR<PromocionUpdateToOneWithWhereWithoutReservasMesaInput, PromocionUpdateWithoutReservasMesaInput>, PromocionUncheckedUpdateWithoutReservasMesaInput>
  }

  export type ResenaMesaUpdateOneWithoutReservaNestedInput = {
    create?: XOR<ResenaMesaCreateWithoutReservaInput, ResenaMesaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutReservaInput
    upsert?: ResenaMesaUpsertWithoutReservaInput
    disconnect?: ResenaMesaWhereInput | boolean
    delete?: ResenaMesaWhereInput | boolean
    connect?: ResenaMesaWhereUniqueInput
    update?: XOR<XOR<ResenaMesaUpdateToOneWithWhereWithoutReservaInput, ResenaMesaUpdateWithoutReservaInput>, ResenaMesaUncheckedUpdateWithoutReservaInput>
  }

  export type ResenaMesaUncheckedUpdateOneWithoutReservaNestedInput = {
    create?: XOR<ResenaMesaCreateWithoutReservaInput, ResenaMesaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaMesaCreateOrConnectWithoutReservaInput
    upsert?: ResenaMesaUpsertWithoutReservaInput
    disconnect?: ResenaMesaWhereInput | boolean
    delete?: ResenaMesaWhereInput | boolean
    connect?: ResenaMesaWhereUniqueInput
    update?: XOR<XOR<ResenaMesaUpdateToOneWithWhereWithoutReservaInput, ResenaMesaUpdateWithoutReservaInput>, ResenaMesaUncheckedUpdateWithoutReservaInput>
  }

  export type ReservaMesaCreateNestedOneWithoutResenaInput = {
    create?: XOR<ReservaMesaCreateWithoutResenaInput, ReservaMesaUncheckedCreateWithoutResenaInput>
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutResenaInput
    connect?: ReservaMesaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutResenasMesaInput = {
    create?: XOR<UsuarioCreateWithoutResenasMesaInput, UsuarioUncheckedCreateWithoutResenasMesaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasMesaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReservaMesaUpdateOneRequiredWithoutResenaNestedInput = {
    create?: XOR<ReservaMesaCreateWithoutResenaInput, ReservaMesaUncheckedCreateWithoutResenaInput>
    connectOrCreate?: ReservaMesaCreateOrConnectWithoutResenaInput
    upsert?: ReservaMesaUpsertWithoutResenaInput
    connect?: ReservaMesaWhereUniqueInput
    update?: XOR<XOR<ReservaMesaUpdateToOneWithWhereWithoutResenaInput, ReservaMesaUpdateWithoutResenaInput>, ReservaMesaUncheckedUpdateWithoutResenaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutResenasMesaNestedInput = {
    create?: XOR<UsuarioCreateWithoutResenasMesaInput, UsuarioUncheckedCreateWithoutResenasMesaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasMesaInput
    upsert?: UsuarioUpsertWithoutResenasMesaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResenasMesaInput, UsuarioUpdateWithoutResenasMesaInput>, UsuarioUncheckedUpdateWithoutResenasMesaInput>
  }

  export type BolsaSorpresaPlantillaCreateetiquetasDietaInput = {
    set: string[]
  }

  export type BolsaSorpresaPlantillaCreatetipComidaInput = {
    set: string[]
  }

  export type RestauranteCreateNestedOneWithoutPlantillasBolsaInput = {
    create?: XOR<RestauranteCreateWithoutPlantillasBolsaInput, RestauranteUncheckedCreateWithoutPlantillasBolsaInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPlantillasBolsaInput
    connect?: RestauranteWhereUniqueInput
  }

  export type PublicacionBolsaCreateNestedManyWithoutPlantillaInput = {
    create?: XOR<PublicacionBolsaCreateWithoutPlantillaInput, PublicacionBolsaUncheckedCreateWithoutPlantillaInput> | PublicacionBolsaCreateWithoutPlantillaInput[] | PublicacionBolsaUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutPlantillaInput | PublicacionBolsaCreateOrConnectWithoutPlantillaInput[]
    createMany?: PublicacionBolsaCreateManyPlantillaInputEnvelope
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
  }

  export type PublicacionBolsaUncheckedCreateNestedManyWithoutPlantillaInput = {
    create?: XOR<PublicacionBolsaCreateWithoutPlantillaInput, PublicacionBolsaUncheckedCreateWithoutPlantillaInput> | PublicacionBolsaCreateWithoutPlantillaInput[] | PublicacionBolsaUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutPlantillaInput | PublicacionBolsaCreateOrConnectWithoutPlantillaInput[]
    createMany?: PublicacionBolsaCreateManyPlantillaInputEnvelope
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
  }

  export type BolsaSorpresaPlantillaUpdateetiquetasDietaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BolsaSorpresaPlantillaUpdatetipComidaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RestauranteUpdateOneRequiredWithoutPlantillasBolsaNestedInput = {
    create?: XOR<RestauranteCreateWithoutPlantillasBolsaInput, RestauranteUncheckedCreateWithoutPlantillasBolsaInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPlantillasBolsaInput
    upsert?: RestauranteUpsertWithoutPlantillasBolsaInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutPlantillasBolsaInput, RestauranteUpdateWithoutPlantillasBolsaInput>, RestauranteUncheckedUpdateWithoutPlantillasBolsaInput>
  }

  export type PublicacionBolsaUpdateManyWithoutPlantillaNestedInput = {
    create?: XOR<PublicacionBolsaCreateWithoutPlantillaInput, PublicacionBolsaUncheckedCreateWithoutPlantillaInput> | PublicacionBolsaCreateWithoutPlantillaInput[] | PublicacionBolsaUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutPlantillaInput | PublicacionBolsaCreateOrConnectWithoutPlantillaInput[]
    upsert?: PublicacionBolsaUpsertWithWhereUniqueWithoutPlantillaInput | PublicacionBolsaUpsertWithWhereUniqueWithoutPlantillaInput[]
    createMany?: PublicacionBolsaCreateManyPlantillaInputEnvelope
    set?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    disconnect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    delete?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    update?: PublicacionBolsaUpdateWithWhereUniqueWithoutPlantillaInput | PublicacionBolsaUpdateWithWhereUniqueWithoutPlantillaInput[]
    updateMany?: PublicacionBolsaUpdateManyWithWhereWithoutPlantillaInput | PublicacionBolsaUpdateManyWithWhereWithoutPlantillaInput[]
    deleteMany?: PublicacionBolsaScalarWhereInput | PublicacionBolsaScalarWhereInput[]
  }

  export type PublicacionBolsaUncheckedUpdateManyWithoutPlantillaNestedInput = {
    create?: XOR<PublicacionBolsaCreateWithoutPlantillaInput, PublicacionBolsaUncheckedCreateWithoutPlantillaInput> | PublicacionBolsaCreateWithoutPlantillaInput[] | PublicacionBolsaUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutPlantillaInput | PublicacionBolsaCreateOrConnectWithoutPlantillaInput[]
    upsert?: PublicacionBolsaUpsertWithWhereUniqueWithoutPlantillaInput | PublicacionBolsaUpsertWithWhereUniqueWithoutPlantillaInput[]
    createMany?: PublicacionBolsaCreateManyPlantillaInputEnvelope
    set?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    disconnect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    delete?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    connect?: PublicacionBolsaWhereUniqueInput | PublicacionBolsaWhereUniqueInput[]
    update?: PublicacionBolsaUpdateWithWhereUniqueWithoutPlantillaInput | PublicacionBolsaUpdateWithWhereUniqueWithoutPlantillaInput[]
    updateMany?: PublicacionBolsaUpdateManyWithWhereWithoutPlantillaInput | PublicacionBolsaUpdateManyWithWhereWithoutPlantillaInput[]
    deleteMany?: PublicacionBolsaScalarWhereInput | PublicacionBolsaScalarWhereInput[]
  }

  export type RestauranteCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<RestauranteCreateWithoutPublicacionesInput, RestauranteUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPublicacionesInput
    connect?: RestauranteWhereUniqueInput
  }

  export type BolsaSorpresaPlantillaCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<BolsaSorpresaPlantillaCreateWithoutPublicacionesInput, BolsaSorpresaPlantillaUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: BolsaSorpresaPlantillaCreateOrConnectWithoutPublicacionesInput
    connect?: BolsaSorpresaPlantillaWhereUniqueInput
  }

  export type ReservaBolsaCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<ReservaBolsaCreateWithoutPublicacionInput, ReservaBolsaUncheckedCreateWithoutPublicacionInput> | ReservaBolsaCreateWithoutPublicacionInput[] | ReservaBolsaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutPublicacionInput | ReservaBolsaCreateOrConnectWithoutPublicacionInput[]
    createMany?: ReservaBolsaCreateManyPublicacionInputEnvelope
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
  }

  export type ReservaBolsaUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<ReservaBolsaCreateWithoutPublicacionInput, ReservaBolsaUncheckedCreateWithoutPublicacionInput> | ReservaBolsaCreateWithoutPublicacionInput[] | ReservaBolsaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutPublicacionInput | ReservaBolsaCreateOrConnectWithoutPublicacionInput[]
    createMany?: ReservaBolsaCreateManyPublicacionInputEnvelope
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
  }

  export type EnumEstadoPublicacionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPublicacion
  }

  export type RestauranteUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<RestauranteCreateWithoutPublicacionesInput, RestauranteUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPublicacionesInput
    upsert?: RestauranteUpsertWithoutPublicacionesInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutPublicacionesInput, RestauranteUpdateWithoutPublicacionesInput>, RestauranteUncheckedUpdateWithoutPublicacionesInput>
  }

  export type BolsaSorpresaPlantillaUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<BolsaSorpresaPlantillaCreateWithoutPublicacionesInput, BolsaSorpresaPlantillaUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: BolsaSorpresaPlantillaCreateOrConnectWithoutPublicacionesInput
    upsert?: BolsaSorpresaPlantillaUpsertWithoutPublicacionesInput
    connect?: BolsaSorpresaPlantillaWhereUniqueInput
    update?: XOR<XOR<BolsaSorpresaPlantillaUpdateToOneWithWhereWithoutPublicacionesInput, BolsaSorpresaPlantillaUpdateWithoutPublicacionesInput>, BolsaSorpresaPlantillaUncheckedUpdateWithoutPublicacionesInput>
  }

  export type ReservaBolsaUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<ReservaBolsaCreateWithoutPublicacionInput, ReservaBolsaUncheckedCreateWithoutPublicacionInput> | ReservaBolsaCreateWithoutPublicacionInput[] | ReservaBolsaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutPublicacionInput | ReservaBolsaCreateOrConnectWithoutPublicacionInput[]
    upsert?: ReservaBolsaUpsertWithWhereUniqueWithoutPublicacionInput | ReservaBolsaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: ReservaBolsaCreateManyPublicacionInputEnvelope
    set?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    disconnect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    delete?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    update?: ReservaBolsaUpdateWithWhereUniqueWithoutPublicacionInput | ReservaBolsaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: ReservaBolsaUpdateManyWithWhereWithoutPublicacionInput | ReservaBolsaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: ReservaBolsaScalarWhereInput | ReservaBolsaScalarWhereInput[]
  }

  export type ReservaBolsaUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<ReservaBolsaCreateWithoutPublicacionInput, ReservaBolsaUncheckedCreateWithoutPublicacionInput> | ReservaBolsaCreateWithoutPublicacionInput[] | ReservaBolsaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutPublicacionInput | ReservaBolsaCreateOrConnectWithoutPublicacionInput[]
    upsert?: ReservaBolsaUpsertWithWhereUniqueWithoutPublicacionInput | ReservaBolsaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: ReservaBolsaCreateManyPublicacionInputEnvelope
    set?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    disconnect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    delete?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    connect?: ReservaBolsaWhereUniqueInput | ReservaBolsaWhereUniqueInput[]
    update?: ReservaBolsaUpdateWithWhereUniqueWithoutPublicacionInput | ReservaBolsaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: ReservaBolsaUpdateManyWithWhereWithoutPublicacionInput | ReservaBolsaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: ReservaBolsaScalarWhereInput | ReservaBolsaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutReservasBolsaInput = {
    create?: XOR<UsuarioCreateWithoutReservasBolsaInput, UsuarioUncheckedCreateWithoutReservasBolsaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasBolsaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PublicacionBolsaCreateNestedOneWithoutReservasInput = {
    create?: XOR<PublicacionBolsaCreateWithoutReservasInput, PublicacionBolsaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutReservasInput
    connect?: PublicacionBolsaWhereUniqueInput
  }

  export type ResenaBolsaCreateNestedOneWithoutReservaInput = {
    create?: XOR<ResenaBolsaCreateWithoutReservaInput, ResenaBolsaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutReservaInput
    connect?: ResenaBolsaWhereUniqueInput
  }

  export type ResenaBolsaUncheckedCreateNestedOneWithoutReservaInput = {
    create?: XOR<ResenaBolsaCreateWithoutReservaInput, ResenaBolsaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutReservaInput
    connect?: ResenaBolsaWhereUniqueInput
  }

  export type EnumEstadoBolsaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoBolsa
  }

  export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago
  }

  export type UsuarioUpdateOneRequiredWithoutReservasBolsaNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasBolsaInput, UsuarioUncheckedCreateWithoutReservasBolsaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasBolsaInput
    upsert?: UsuarioUpsertWithoutReservasBolsaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasBolsaInput, UsuarioUpdateWithoutReservasBolsaInput>, UsuarioUncheckedUpdateWithoutReservasBolsaInput>
  }

  export type PublicacionBolsaUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<PublicacionBolsaCreateWithoutReservasInput, PublicacionBolsaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PublicacionBolsaCreateOrConnectWithoutReservasInput
    upsert?: PublicacionBolsaUpsertWithoutReservasInput
    connect?: PublicacionBolsaWhereUniqueInput
    update?: XOR<XOR<PublicacionBolsaUpdateToOneWithWhereWithoutReservasInput, PublicacionBolsaUpdateWithoutReservasInput>, PublicacionBolsaUncheckedUpdateWithoutReservasInput>
  }

  export type ResenaBolsaUpdateOneWithoutReservaNestedInput = {
    create?: XOR<ResenaBolsaCreateWithoutReservaInput, ResenaBolsaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutReservaInput
    upsert?: ResenaBolsaUpsertWithoutReservaInput
    disconnect?: ResenaBolsaWhereInput | boolean
    delete?: ResenaBolsaWhereInput | boolean
    connect?: ResenaBolsaWhereUniqueInput
    update?: XOR<XOR<ResenaBolsaUpdateToOneWithWhereWithoutReservaInput, ResenaBolsaUpdateWithoutReservaInput>, ResenaBolsaUncheckedUpdateWithoutReservaInput>
  }

  export type ResenaBolsaUncheckedUpdateOneWithoutReservaNestedInput = {
    create?: XOR<ResenaBolsaCreateWithoutReservaInput, ResenaBolsaUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ResenaBolsaCreateOrConnectWithoutReservaInput
    upsert?: ResenaBolsaUpsertWithoutReservaInput
    disconnect?: ResenaBolsaWhereInput | boolean
    delete?: ResenaBolsaWhereInput | boolean
    connect?: ResenaBolsaWhereUniqueInput
    update?: XOR<XOR<ResenaBolsaUpdateToOneWithWhereWithoutReservaInput, ResenaBolsaUpdateWithoutReservaInput>, ResenaBolsaUncheckedUpdateWithoutReservaInput>
  }

  export type ReservaBolsaCreateNestedOneWithoutResenaInput = {
    create?: XOR<ReservaBolsaCreateWithoutResenaInput, ReservaBolsaUncheckedCreateWithoutResenaInput>
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutResenaInput
    connect?: ReservaBolsaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutResenasBolsaInput = {
    create?: XOR<UsuarioCreateWithoutResenasBolsaInput, UsuarioUncheckedCreateWithoutResenasBolsaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasBolsaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReservaBolsaUpdateOneRequiredWithoutResenaNestedInput = {
    create?: XOR<ReservaBolsaCreateWithoutResenaInput, ReservaBolsaUncheckedCreateWithoutResenaInput>
    connectOrCreate?: ReservaBolsaCreateOrConnectWithoutResenaInput
    upsert?: ReservaBolsaUpsertWithoutResenaInput
    connect?: ReservaBolsaWhereUniqueInput
    update?: XOR<XOR<ReservaBolsaUpdateToOneWithWhereWithoutResenaInput, ReservaBolsaUpdateWithoutResenaInput>, ReservaBolsaUncheckedUpdateWithoutResenaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutResenasBolsaNestedInput = {
    create?: XOR<UsuarioCreateWithoutResenasBolsaInput, UsuarioUncheckedCreateWithoutResenasBolsaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenasBolsaInput
    upsert?: UsuarioUpsertWithoutResenasBolsaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResenasBolsaInput, UsuarioUpdateWithoutResenasBolsaInput>, UsuarioUncheckedUpdateWithoutResenasBolsaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEstadoRestauranteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRestaurante | EnumEstadoRestauranteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRestauranteFilter<$PrismaModel> | $Enums.EstadoRestaurante
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoRestauranteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRestaurante | EnumEstadoRestauranteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRestaurante[] | ListEnumEstadoRestauranteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRestauranteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoRestaurante
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoRestauranteFilter<$PrismaModel>
    _max?: NestedEnumEstadoRestauranteFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTipoPromoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPromo | EnumTipoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPromoFilter<$PrismaModel> | $Enums.TipoPromo
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEstadoPromoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPromo | EnumEstadoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPromoFilter<$PrismaModel> | $Enums.EstadoPromo
  }

  export type NestedEnumTipoPromoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPromo | EnumTipoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPromo[] | ListEnumTipoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPromoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPromo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPromoFilter<$PrismaModel>
    _max?: NestedEnumTipoPromoFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoPromoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPromo | EnumEstadoPromoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPromo[] | ListEnumEstadoPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPromoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPromo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPromoFilter<$PrismaModel>
    _max?: NestedEnumEstadoPromoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoPublicacionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPublicacion | EnumEstadoPublicacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPublicacionFilter<$PrismaModel> | $Enums.EstadoPublicacion
  }

  export type NestedEnumEstadoPublicacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPublicacion | EnumEstadoPublicacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPublicacion[] | ListEnumEstadoPublicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPublicacionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPublicacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPublicacionFilter<$PrismaModel>
    _max?: NestedEnumEstadoPublicacionFilter<$PrismaModel>
  }

  export type NestedEnumEstadoBolsaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBolsa | EnumEstadoBolsaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBolsaFilter<$PrismaModel> | $Enums.EstadoBolsa
  }

  export type NestedEnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type NestedEnumEstadoBolsaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBolsa | EnumEstadoBolsaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBolsa[] | ListEnumEstadoBolsaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBolsaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBolsa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBolsaFilter<$PrismaModel>
    _max?: NestedEnumEstadoBolsaFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type ReservaMesaCreateWithoutClienteInput = {
    id?: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutReservasMesaInput
    promocion?: PromocionCreateNestedOneWithoutReservasMesaInput
    resena?: ResenaMesaCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaUncheckedCreateWithoutClienteInput = {
    id?: string
    restauranteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaMesaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaCreateOrConnectWithoutClienteInput = {
    where: ReservaMesaWhereUniqueInput
    create: XOR<ReservaMesaCreateWithoutClienteInput, ReservaMesaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaMesaCreateManyClienteInputEnvelope = {
    data: ReservaMesaCreateManyClienteInput | ReservaMesaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaBolsaCreateWithoutClienteInput = {
    id?: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    publicacion: PublicacionBolsaCreateNestedOneWithoutReservasInput
    resena?: ResenaBolsaCreateNestedOneWithoutReservaInput
  }

  export type ReservaBolsaUncheckedCreateWithoutClienteInput = {
    id?: string
    publicacionId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaBolsaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaBolsaCreateOrConnectWithoutClienteInput = {
    where: ReservaBolsaWhereUniqueInput
    create: XOR<ReservaBolsaCreateWithoutClienteInput, ReservaBolsaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaBolsaCreateManyClienteInputEnvelope = {
    data: ReservaBolsaCreateManyClienteInput | ReservaBolsaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ResenaMesaCreateWithoutClienteInput = {
    id?: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
    reserva: ReservaMesaCreateNestedOneWithoutResenaInput
  }

  export type ResenaMesaUncheckedCreateWithoutClienteInput = {
    id?: string
    reservaId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaMesaCreateOrConnectWithoutClienteInput = {
    where: ResenaMesaWhereUniqueInput
    create: XOR<ResenaMesaCreateWithoutClienteInput, ResenaMesaUncheckedCreateWithoutClienteInput>
  }

  export type ResenaMesaCreateManyClienteInputEnvelope = {
    data: ResenaMesaCreateManyClienteInput | ResenaMesaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ResenaBolsaCreateWithoutClienteInput = {
    id?: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
    reserva: ReservaBolsaCreateNestedOneWithoutResenaInput
  }

  export type ResenaBolsaUncheckedCreateWithoutClienteInput = {
    id?: string
    reservaId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaBolsaCreateOrConnectWithoutClienteInput = {
    where: ResenaBolsaWhereUniqueInput
    create: XOR<ResenaBolsaCreateWithoutClienteInput, ResenaBolsaUncheckedCreateWithoutClienteInput>
  }

  export type ResenaBolsaCreateManyClienteInputEnvelope = {
    data: ResenaBolsaCreateManyClienteInput | ResenaBolsaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type RestauranteCreateWithoutManagerInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoCreateNestedManyWithoutRestauranteInput
    promos?: PromocionCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutManagerInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutRestauranteInput
    promos?: PromocionUncheckedCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutManagerInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutManagerInput, RestauranteUncheckedCreateWithoutManagerInput>
  }

  export type ReservaMesaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReservaMesaWhereUniqueInput
    update: XOR<ReservaMesaUpdateWithoutClienteInput, ReservaMesaUncheckedUpdateWithoutClienteInput>
    create: XOR<ReservaMesaCreateWithoutClienteInput, ReservaMesaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaMesaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReservaMesaWhereUniqueInput
    data: XOR<ReservaMesaUpdateWithoutClienteInput, ReservaMesaUncheckedUpdateWithoutClienteInput>
  }

  export type ReservaMesaUpdateManyWithWhereWithoutClienteInput = {
    where: ReservaMesaScalarWhereInput
    data: XOR<ReservaMesaUpdateManyMutationInput, ReservaMesaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ReservaMesaScalarWhereInput = {
    AND?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
    OR?: ReservaMesaScalarWhereInput[]
    NOT?: ReservaMesaScalarWhereInput | ReservaMesaScalarWhereInput[]
    id?: StringFilter<"ReservaMesa"> | string
    clienteId?: StringFilter<"ReservaMesa"> | string
    restauranteId?: StringFilter<"ReservaMesa"> | string
    promocionId?: StringNullableFilter<"ReservaMesa"> | string | null
    fecha?: DateTimeFilter<"ReservaMesa"> | Date | string
    hora?: StringFilter<"ReservaMesa"> | string
    comensales?: IntFilter<"ReservaMesa"> | number
    estado?: EnumEstadoReservaFilter<"ReservaMesa"> | $Enums.EstadoReserva
    codigo?: StringFilter<"ReservaMesa"> | string
    notas?: StringNullableFilter<"ReservaMesa"> | string | null
    creadoEn?: DateTimeFilter<"ReservaMesa"> | Date | string
    actualizadoEn?: DateTimeFilter<"ReservaMesa"> | Date | string
  }

  export type ReservaBolsaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReservaBolsaWhereUniqueInput
    update: XOR<ReservaBolsaUpdateWithoutClienteInput, ReservaBolsaUncheckedUpdateWithoutClienteInput>
    create: XOR<ReservaBolsaCreateWithoutClienteInput, ReservaBolsaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaBolsaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReservaBolsaWhereUniqueInput
    data: XOR<ReservaBolsaUpdateWithoutClienteInput, ReservaBolsaUncheckedUpdateWithoutClienteInput>
  }

  export type ReservaBolsaUpdateManyWithWhereWithoutClienteInput = {
    where: ReservaBolsaScalarWhereInput
    data: XOR<ReservaBolsaUpdateManyMutationInput, ReservaBolsaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ReservaBolsaScalarWhereInput = {
    AND?: ReservaBolsaScalarWhereInput | ReservaBolsaScalarWhereInput[]
    OR?: ReservaBolsaScalarWhereInput[]
    NOT?: ReservaBolsaScalarWhereInput | ReservaBolsaScalarWhereInput[]
    id?: StringFilter<"ReservaBolsa"> | string
    clienteId?: StringFilter<"ReservaBolsa"> | string
    publicacionId?: StringFilter<"ReservaBolsa"> | string
    unidades?: IntFilter<"ReservaBolsa"> | number
    estado?: EnumEstadoBolsaFilter<"ReservaBolsa"> | $Enums.EstadoBolsa
    codigo?: StringFilter<"ReservaBolsa"> | string
    metodoPago?: EnumMetodoPagoFilter<"ReservaBolsa"> | $Enums.MetodoPago
    creadoEn?: DateTimeFilter<"ReservaBolsa"> | Date | string
    actualizadoEn?: DateTimeFilter<"ReservaBolsa"> | Date | string
  }

  export type ResenaMesaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ResenaMesaWhereUniqueInput
    update: XOR<ResenaMesaUpdateWithoutClienteInput, ResenaMesaUncheckedUpdateWithoutClienteInput>
    create: XOR<ResenaMesaCreateWithoutClienteInput, ResenaMesaUncheckedCreateWithoutClienteInput>
  }

  export type ResenaMesaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ResenaMesaWhereUniqueInput
    data: XOR<ResenaMesaUpdateWithoutClienteInput, ResenaMesaUncheckedUpdateWithoutClienteInput>
  }

  export type ResenaMesaUpdateManyWithWhereWithoutClienteInput = {
    where: ResenaMesaScalarWhereInput
    data: XOR<ResenaMesaUpdateManyMutationInput, ResenaMesaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ResenaMesaScalarWhereInput = {
    AND?: ResenaMesaScalarWhereInput | ResenaMesaScalarWhereInput[]
    OR?: ResenaMesaScalarWhereInput[]
    NOT?: ResenaMesaScalarWhereInput | ResenaMesaScalarWhereInput[]
    id?: StringFilter<"ResenaMesa"> | string
    reservaId?: StringFilter<"ResenaMesa"> | string
    clienteId?: StringFilter<"ResenaMesa"> | string
    rating?: IntFilter<"ResenaMesa"> | number
    comentario?: StringNullableFilter<"ResenaMesa"> | string | null
    creadoEn?: DateTimeFilter<"ResenaMesa"> | Date | string
  }

  export type ResenaBolsaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ResenaBolsaWhereUniqueInput
    update: XOR<ResenaBolsaUpdateWithoutClienteInput, ResenaBolsaUncheckedUpdateWithoutClienteInput>
    create: XOR<ResenaBolsaCreateWithoutClienteInput, ResenaBolsaUncheckedCreateWithoutClienteInput>
  }

  export type ResenaBolsaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ResenaBolsaWhereUniqueInput
    data: XOR<ResenaBolsaUpdateWithoutClienteInput, ResenaBolsaUncheckedUpdateWithoutClienteInput>
  }

  export type ResenaBolsaUpdateManyWithWhereWithoutClienteInput = {
    where: ResenaBolsaScalarWhereInput
    data: XOR<ResenaBolsaUpdateManyMutationInput, ResenaBolsaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ResenaBolsaScalarWhereInput = {
    AND?: ResenaBolsaScalarWhereInput | ResenaBolsaScalarWhereInput[]
    OR?: ResenaBolsaScalarWhereInput[]
    NOT?: ResenaBolsaScalarWhereInput | ResenaBolsaScalarWhereInput[]
    id?: StringFilter<"ResenaBolsa"> | string
    reservaId?: StringFilter<"ResenaBolsa"> | string
    clienteId?: StringFilter<"ResenaBolsa"> | string
    rating?: IntFilter<"ResenaBolsa"> | number
    comentario?: StringNullableFilter<"ResenaBolsa"> | string | null
    creadoEn?: DateTimeFilter<"ResenaBolsa"> | Date | string
  }

  export type RestauranteUpsertWithoutManagerInput = {
    update: XOR<RestauranteUpdateWithoutManagerInput, RestauranteUncheckedUpdateWithoutManagerInput>
    create: XOR<RestauranteCreateWithoutManagerInput, RestauranteUncheckedCreateWithoutManagerInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutManagerInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutManagerInput, RestauranteUncheckedUpdateWithoutManagerInput>
  }

  export type RestauranteUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUncheckedUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type UsuarioCreateWithoutRestauranteInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUncheckedCreateWithoutRestauranteInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaUncheckedCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaUncheckedCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UsuarioCreateOrConnectWithoutRestauranteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRestauranteInput, UsuarioUncheckedCreateWithoutRestauranteInput>
  }

  export type TurnoCreateWithoutRestauranteInput = {
    id?: string
    nombre: string
    diasSemana?: TurnoCreatediasSemanaInput | number[]
    horaInicio: string
    horaFin: string
    intervaloMin?: number
    capacidad: number
    activo?: boolean
    creadoEn?: Date | string
  }

  export type TurnoUncheckedCreateWithoutRestauranteInput = {
    id?: string
    nombre: string
    diasSemana?: TurnoCreatediasSemanaInput | number[]
    horaInicio: string
    horaFin: string
    intervaloMin?: number
    capacidad: number
    activo?: boolean
    creadoEn?: Date | string
  }

  export type TurnoCreateOrConnectWithoutRestauranteInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutRestauranteInput, TurnoUncheckedCreateWithoutRestauranteInput>
  }

  export type TurnoCreateManyRestauranteInputEnvelope = {
    data: TurnoCreateManyRestauranteInput | TurnoCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type PromocionCreateWithoutRestauranteInput = {
    id?: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaCreateNestedManyWithoutPromocionInput
  }

  export type PromocionUncheckedCreateWithoutRestauranteInput = {
    id?: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutPromocionInput
  }

  export type PromocionCreateOrConnectWithoutRestauranteInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutRestauranteInput, PromocionUncheckedCreateWithoutRestauranteInput>
  }

  export type PromocionCreateManyRestauranteInputEnvelope = {
    data: PromocionCreateManyRestauranteInput | PromocionCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaMesaCreateWithoutRestauranteInput = {
    id?: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasMesaInput
    promocion?: PromocionCreateNestedOneWithoutReservasMesaInput
    resena?: ResenaMesaCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaUncheckedCreateWithoutRestauranteInput = {
    id?: string
    clienteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaMesaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaCreateOrConnectWithoutRestauranteInput = {
    where: ReservaMesaWhereUniqueInput
    create: XOR<ReservaMesaCreateWithoutRestauranteInput, ReservaMesaUncheckedCreateWithoutRestauranteInput>
  }

  export type ReservaMesaCreateManyRestauranteInputEnvelope = {
    data: ReservaMesaCreateManyRestauranteInput | ReservaMesaCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type BolsaSorpresaPlantillaCreateWithoutRestauranteInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutPlantillaInput
  }

  export type BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutPlantillaInput
  }

  export type BolsaSorpresaPlantillaCreateOrConnectWithoutRestauranteInput = {
    where: BolsaSorpresaPlantillaWhereUniqueInput
    create: XOR<BolsaSorpresaPlantillaCreateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput>
  }

  export type BolsaSorpresaPlantillaCreateManyRestauranteInputEnvelope = {
    data: BolsaSorpresaPlantillaCreateManyRestauranteInput | BolsaSorpresaPlantillaCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type PublicacionBolsaCreateWithoutRestauranteInput = {
    id?: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    plantilla: BolsaSorpresaPlantillaCreateNestedOneWithoutPublicacionesInput
    reservas?: ReservaBolsaCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionBolsaUncheckedCreateWithoutRestauranteInput = {
    id?: string
    plantillaId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservas?: ReservaBolsaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionBolsaCreateOrConnectWithoutRestauranteInput = {
    where: PublicacionBolsaWhereUniqueInput
    create: XOR<PublicacionBolsaCreateWithoutRestauranteInput, PublicacionBolsaUncheckedCreateWithoutRestauranteInput>
  }

  export type PublicacionBolsaCreateManyRestauranteInputEnvelope = {
    data: PublicacionBolsaCreateManyRestauranteInput | PublicacionBolsaCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutRestauranteInput = {
    update: XOR<UsuarioUpdateWithoutRestauranteInput, UsuarioUncheckedUpdateWithoutRestauranteInput>
    create: XOR<UsuarioCreateWithoutRestauranteInput, UsuarioUncheckedCreateWithoutRestauranteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRestauranteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRestauranteInput, UsuarioUncheckedUpdateWithoutRestauranteInput>
  }

  export type UsuarioUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUncheckedUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type TurnoUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutRestauranteInput, TurnoUncheckedUpdateWithoutRestauranteInput>
    create: XOR<TurnoCreateWithoutRestauranteInput, TurnoUncheckedCreateWithoutRestauranteInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutRestauranteInput, TurnoUncheckedUpdateWithoutRestauranteInput>
  }

  export type TurnoUpdateManyWithWhereWithoutRestauranteInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type TurnoScalarWhereInput = {
    AND?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    OR?: TurnoScalarWhereInput[]
    NOT?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    id?: StringFilter<"Turno"> | string
    restauranteId?: StringFilter<"Turno"> | string
    nombre?: StringFilter<"Turno"> | string
    diasSemana?: IntNullableListFilter<"Turno">
    horaInicio?: StringFilter<"Turno"> | string
    horaFin?: StringFilter<"Turno"> | string
    intervaloMin?: IntFilter<"Turno"> | number
    capacidad?: IntFilter<"Turno"> | number
    activo?: BoolFilter<"Turno"> | boolean
    creadoEn?: DateTimeFilter<"Turno"> | Date | string
  }

  export type PromocionUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: PromocionWhereUniqueInput
    update: XOR<PromocionUpdateWithoutRestauranteInput, PromocionUncheckedUpdateWithoutRestauranteInput>
    create: XOR<PromocionCreateWithoutRestauranteInput, PromocionUncheckedCreateWithoutRestauranteInput>
  }

  export type PromocionUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: PromocionWhereUniqueInput
    data: XOR<PromocionUpdateWithoutRestauranteInput, PromocionUncheckedUpdateWithoutRestauranteInput>
  }

  export type PromocionUpdateManyWithWhereWithoutRestauranteInput = {
    where: PromocionScalarWhereInput
    data: XOR<PromocionUpdateManyMutationInput, PromocionUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type PromocionScalarWhereInput = {
    AND?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
    OR?: PromocionScalarWhereInput[]
    NOT?: PromocionScalarWhereInput | PromocionScalarWhereInput[]
    id?: StringFilter<"Promocion"> | string
    restauranteId?: StringFilter<"Promocion"> | string
    nombre?: StringFilter<"Promocion"> | string
    tipo?: EnumTipoPromoFilter<"Promocion"> | $Enums.TipoPromo
    valor?: FloatFilter<"Promocion"> | number
    condiciones?: StringNullableFilter<"Promocion"> | string | null
    fechaInicio?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Promocion"> | Date | string | null
    diasSemana?: IntNullableListFilter<"Promocion">
    horaInicio?: StringNullableFilter<"Promocion"> | string | null
    horaFin?: StringNullableFilter<"Promocion"> | string | null
    estado?: EnumEstadoPromoFilter<"Promocion"> | $Enums.EstadoPromo
    creadoEn?: DateTimeFilter<"Promocion"> | Date | string
    actualizadoEn?: DateTimeFilter<"Promocion"> | Date | string
  }

  export type ReservaMesaUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: ReservaMesaWhereUniqueInput
    update: XOR<ReservaMesaUpdateWithoutRestauranteInput, ReservaMesaUncheckedUpdateWithoutRestauranteInput>
    create: XOR<ReservaMesaCreateWithoutRestauranteInput, ReservaMesaUncheckedCreateWithoutRestauranteInput>
  }

  export type ReservaMesaUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: ReservaMesaWhereUniqueInput
    data: XOR<ReservaMesaUpdateWithoutRestauranteInput, ReservaMesaUncheckedUpdateWithoutRestauranteInput>
  }

  export type ReservaMesaUpdateManyWithWhereWithoutRestauranteInput = {
    where: ReservaMesaScalarWhereInput
    data: XOR<ReservaMesaUpdateManyMutationInput, ReservaMesaUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type BolsaSorpresaPlantillaUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: BolsaSorpresaPlantillaWhereUniqueInput
    update: XOR<BolsaSorpresaPlantillaUpdateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedUpdateWithoutRestauranteInput>
    create: XOR<BolsaSorpresaPlantillaCreateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedCreateWithoutRestauranteInput>
  }

  export type BolsaSorpresaPlantillaUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: BolsaSorpresaPlantillaWhereUniqueInput
    data: XOR<BolsaSorpresaPlantillaUpdateWithoutRestauranteInput, BolsaSorpresaPlantillaUncheckedUpdateWithoutRestauranteInput>
  }

  export type BolsaSorpresaPlantillaUpdateManyWithWhereWithoutRestauranteInput = {
    where: BolsaSorpresaPlantillaScalarWhereInput
    data: XOR<BolsaSorpresaPlantillaUpdateManyMutationInput, BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type BolsaSorpresaPlantillaScalarWhereInput = {
    AND?: BolsaSorpresaPlantillaScalarWhereInput | BolsaSorpresaPlantillaScalarWhereInput[]
    OR?: BolsaSorpresaPlantillaScalarWhereInput[]
    NOT?: BolsaSorpresaPlantillaScalarWhereInput | BolsaSorpresaPlantillaScalarWhereInput[]
    id?: StringFilter<"BolsaSorpresaPlantilla"> | string
    restauranteId?: StringFilter<"BolsaSorpresaPlantilla"> | string
    nombre?: StringFilter<"BolsaSorpresaPlantilla"> | string
    descripcion?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    precio?: FloatFilter<"BolsaSorpresaPlantilla"> | number
    valorEstimado?: FloatFilter<"BolsaSorpresaPlantilla"> | number
    etiquetasDieta?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    tipComida?: StringNullableListFilter<"BolsaSorpresaPlantilla">
    condiciones?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    politicaReembolso?: StringNullableFilter<"BolsaSorpresaPlantilla"> | string | null
    activa?: BoolFilter<"BolsaSorpresaPlantilla"> | boolean
    creadoEn?: DateTimeFilter<"BolsaSorpresaPlantilla"> | Date | string
    actualizadoEn?: DateTimeFilter<"BolsaSorpresaPlantilla"> | Date | string
  }

  export type PublicacionBolsaUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: PublicacionBolsaWhereUniqueInput
    update: XOR<PublicacionBolsaUpdateWithoutRestauranteInput, PublicacionBolsaUncheckedUpdateWithoutRestauranteInput>
    create: XOR<PublicacionBolsaCreateWithoutRestauranteInput, PublicacionBolsaUncheckedCreateWithoutRestauranteInput>
  }

  export type PublicacionBolsaUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: PublicacionBolsaWhereUniqueInput
    data: XOR<PublicacionBolsaUpdateWithoutRestauranteInput, PublicacionBolsaUncheckedUpdateWithoutRestauranteInput>
  }

  export type PublicacionBolsaUpdateManyWithWhereWithoutRestauranteInput = {
    where: PublicacionBolsaScalarWhereInput
    data: XOR<PublicacionBolsaUpdateManyMutationInput, PublicacionBolsaUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type PublicacionBolsaScalarWhereInput = {
    AND?: PublicacionBolsaScalarWhereInput | PublicacionBolsaScalarWhereInput[]
    OR?: PublicacionBolsaScalarWhereInput[]
    NOT?: PublicacionBolsaScalarWhereInput | PublicacionBolsaScalarWhereInput[]
    id?: StringFilter<"PublicacionBolsa"> | string
    restauranteId?: StringFilter<"PublicacionBolsa"> | string
    plantillaId?: StringFilter<"PublicacionBolsa"> | string
    fecha?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    franjaInicio?: StringFilter<"PublicacionBolsa"> | string
    franjaFin?: StringFilter<"PublicacionBolsa"> | string
    unidadesTotales?: IntFilter<"PublicacionBolsa"> | number
    unidadesVendidas?: IntFilter<"PublicacionBolsa"> | number
    estado?: EnumEstadoPublicacionFilter<"PublicacionBolsa"> | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFilter<"PublicacionBolsa"> | Date | string
    actualizadoEn?: DateTimeFilter<"PublicacionBolsa"> | Date | string
  }

  export type RestauranteCreateWithoutTurnosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    manager: UsuarioCreateNestedOneWithoutRestauranteInput
    promos?: PromocionCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutTurnosInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    promos?: PromocionUncheckedCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutTurnosInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutTurnosInput, RestauranteUncheckedCreateWithoutTurnosInput>
  }

  export type RestauranteUpsertWithoutTurnosInput = {
    update: XOR<RestauranteUpdateWithoutTurnosInput, RestauranteUncheckedUpdateWithoutTurnosInput>
    create: XOR<RestauranteCreateWithoutTurnosInput, RestauranteUncheckedCreateWithoutTurnosInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutTurnosInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutTurnosInput, RestauranteUncheckedUpdateWithoutTurnosInput>
  }

  export type RestauranteUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UsuarioUpdateOneRequiredWithoutRestauranteNestedInput
    promos?: PromocionUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    promos?: PromocionUncheckedUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCreateWithoutPromosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    manager: UsuarioCreateNestedOneWithoutRestauranteInput
    turnos?: TurnoCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutPromosInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutPromosInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutPromosInput, RestauranteUncheckedCreateWithoutPromosInput>
  }

  export type ReservaMesaCreateWithoutPromocionInput = {
    id?: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasMesaInput
    restaurante: RestauranteCreateNestedOneWithoutReservasMesaInput
    resena?: ResenaMesaCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaUncheckedCreateWithoutPromocionInput = {
    id?: string
    clienteId: string
    restauranteId: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaMesaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaMesaCreateOrConnectWithoutPromocionInput = {
    where: ReservaMesaWhereUniqueInput
    create: XOR<ReservaMesaCreateWithoutPromocionInput, ReservaMesaUncheckedCreateWithoutPromocionInput>
  }

  export type ReservaMesaCreateManyPromocionInputEnvelope = {
    data: ReservaMesaCreateManyPromocionInput | ReservaMesaCreateManyPromocionInput[]
    skipDuplicates?: boolean
  }

  export type RestauranteUpsertWithoutPromosInput = {
    update: XOR<RestauranteUpdateWithoutPromosInput, RestauranteUncheckedUpdateWithoutPromosInput>
    create: XOR<RestauranteCreateWithoutPromosInput, RestauranteUncheckedCreateWithoutPromosInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutPromosInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutPromosInput, RestauranteUncheckedUpdateWithoutPromosInput>
  }

  export type RestauranteUpdateWithoutPromosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UsuarioUpdateOneRequiredWithoutRestauranteNestedInput
    turnos?: TurnoUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutPromosInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type ReservaMesaUpsertWithWhereUniqueWithoutPromocionInput = {
    where: ReservaMesaWhereUniqueInput
    update: XOR<ReservaMesaUpdateWithoutPromocionInput, ReservaMesaUncheckedUpdateWithoutPromocionInput>
    create: XOR<ReservaMesaCreateWithoutPromocionInput, ReservaMesaUncheckedCreateWithoutPromocionInput>
  }

  export type ReservaMesaUpdateWithWhereUniqueWithoutPromocionInput = {
    where: ReservaMesaWhereUniqueInput
    data: XOR<ReservaMesaUpdateWithoutPromocionInput, ReservaMesaUncheckedUpdateWithoutPromocionInput>
  }

  export type ReservaMesaUpdateManyWithWhereWithoutPromocionInput = {
    where: ReservaMesaScalarWhereInput
    data: XOR<ReservaMesaUpdateManyMutationInput, ReservaMesaUncheckedUpdateManyWithoutPromocionInput>
  }

  export type UsuarioCreateWithoutReservasMesaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasBolsa?: ReservaBolsaCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteCreateNestedOneWithoutManagerInput
  }

  export type UsuarioUncheckedCreateWithoutReservasMesaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasBolsa?: ReservaBolsaUncheckedCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaUncheckedCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaUncheckedCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteUncheckedCreateNestedOneWithoutManagerInput
  }

  export type UsuarioCreateOrConnectWithoutReservasMesaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasMesaInput, UsuarioUncheckedCreateWithoutReservasMesaInput>
  }

  export type RestauranteCreateWithoutReservasMesaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    manager: UsuarioCreateNestedOneWithoutRestauranteInput
    turnos?: TurnoCreateNestedManyWithoutRestauranteInput
    promos?: PromocionCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutReservasMesaInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutRestauranteInput
    promos?: PromocionUncheckedCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutReservasMesaInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutReservasMesaInput, RestauranteUncheckedCreateWithoutReservasMesaInput>
  }

  export type PromocionCreateWithoutReservasMesaInput = {
    id?: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPromosInput
  }

  export type PromocionUncheckedCreateWithoutReservasMesaInput = {
    id?: string
    restauranteId: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PromocionCreateOrConnectWithoutReservasMesaInput = {
    where: PromocionWhereUniqueInput
    create: XOR<PromocionCreateWithoutReservasMesaInput, PromocionUncheckedCreateWithoutReservasMesaInput>
  }

  export type ResenaMesaCreateWithoutReservaInput = {
    id?: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutResenasMesaInput
  }

  export type ResenaMesaUncheckedCreateWithoutReservaInput = {
    id?: string
    clienteId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaMesaCreateOrConnectWithoutReservaInput = {
    where: ResenaMesaWhereUniqueInput
    create: XOR<ResenaMesaCreateWithoutReservaInput, ResenaMesaUncheckedCreateWithoutReservaInput>
  }

  export type UsuarioUpsertWithoutReservasMesaInput = {
    update: XOR<UsuarioUpdateWithoutReservasMesaInput, UsuarioUncheckedUpdateWithoutReservasMesaInput>
    create: XOR<UsuarioCreateWithoutReservasMesaInput, UsuarioUncheckedCreateWithoutReservasMesaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasMesaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasMesaInput, UsuarioUncheckedUpdateWithoutReservasMesaInput>
  }

  export type UsuarioUpdateWithoutReservasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasBolsa?: ReservaBolsaUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUpdateOneWithoutManagerNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReservasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasBolsa?: ReservaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUncheckedUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type RestauranteUpsertWithoutReservasMesaInput = {
    update: XOR<RestauranteUpdateWithoutReservasMesaInput, RestauranteUncheckedUpdateWithoutReservasMesaInput>
    create: XOR<RestauranteCreateWithoutReservasMesaInput, RestauranteUncheckedCreateWithoutReservasMesaInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutReservasMesaInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutReservasMesaInput, RestauranteUncheckedUpdateWithoutReservasMesaInput>
  }

  export type RestauranteUpdateWithoutReservasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UsuarioUpdateOneRequiredWithoutRestauranteNestedInput
    turnos?: TurnoUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutReservasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUncheckedUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type PromocionUpsertWithoutReservasMesaInput = {
    update: XOR<PromocionUpdateWithoutReservasMesaInput, PromocionUncheckedUpdateWithoutReservasMesaInput>
    create: XOR<PromocionCreateWithoutReservasMesaInput, PromocionUncheckedCreateWithoutReservasMesaInput>
    where?: PromocionWhereInput
  }

  export type PromocionUpdateToOneWithWhereWithoutReservasMesaInput = {
    where?: PromocionWhereInput
    data: XOR<PromocionUpdateWithoutReservasMesaInput, PromocionUncheckedUpdateWithoutReservasMesaInput>
  }

  export type PromocionUpdateWithoutReservasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPromosNestedInput
  }

  export type PromocionUncheckedUpdateWithoutReservasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaMesaUpsertWithoutReservaInput = {
    update: XOR<ResenaMesaUpdateWithoutReservaInput, ResenaMesaUncheckedUpdateWithoutReservaInput>
    create: XOR<ResenaMesaCreateWithoutReservaInput, ResenaMesaUncheckedCreateWithoutReservaInput>
    where?: ResenaMesaWhereInput
  }

  export type ResenaMesaUpdateToOneWithWhereWithoutReservaInput = {
    where?: ResenaMesaWhereInput
    data: XOR<ResenaMesaUpdateWithoutReservaInput, ResenaMesaUncheckedUpdateWithoutReservaInput>
  }

  export type ResenaMesaUpdateWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutResenasMesaNestedInput
  }

  export type ResenaMesaUncheckedUpdateWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaMesaCreateWithoutResenaInput = {
    id?: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasMesaInput
    restaurante: RestauranteCreateNestedOneWithoutReservasMesaInput
    promocion?: PromocionCreateNestedOneWithoutReservasMesaInput
  }

  export type ReservaMesaUncheckedCreateWithoutResenaInput = {
    id?: string
    clienteId: string
    restauranteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaMesaCreateOrConnectWithoutResenaInput = {
    where: ReservaMesaWhereUniqueInput
    create: XOR<ReservaMesaCreateWithoutResenaInput, ReservaMesaUncheckedCreateWithoutResenaInput>
  }

  export type UsuarioCreateWithoutResenasMesaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteCreateNestedOneWithoutManagerInput
  }

  export type UsuarioUncheckedCreateWithoutResenasMesaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaUncheckedCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaUncheckedCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteUncheckedCreateNestedOneWithoutManagerInput
  }

  export type UsuarioCreateOrConnectWithoutResenasMesaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResenasMesaInput, UsuarioUncheckedCreateWithoutResenasMesaInput>
  }

  export type ReservaMesaUpsertWithoutResenaInput = {
    update: XOR<ReservaMesaUpdateWithoutResenaInput, ReservaMesaUncheckedUpdateWithoutResenaInput>
    create: XOR<ReservaMesaCreateWithoutResenaInput, ReservaMesaUncheckedCreateWithoutResenaInput>
    where?: ReservaMesaWhereInput
  }

  export type ReservaMesaUpdateToOneWithWhereWithoutResenaInput = {
    where?: ReservaMesaWhereInput
    data: XOR<ReservaMesaUpdateWithoutResenaInput, ReservaMesaUncheckedUpdateWithoutResenaInput>
  }

  export type ReservaMesaUpdateWithoutResenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasMesaNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutReservasMesaNestedInput
    promocion?: PromocionUpdateOneWithoutReservasMesaNestedInput
  }

  export type ReservaMesaUncheckedUpdateWithoutResenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutResenasMesaInput = {
    update: XOR<UsuarioUpdateWithoutResenasMesaInput, UsuarioUncheckedUpdateWithoutResenasMesaInput>
    create: XOR<UsuarioCreateWithoutResenasMesaInput, UsuarioUncheckedCreateWithoutResenasMesaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResenasMesaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResenasMesaInput, UsuarioUncheckedUpdateWithoutResenasMesaInput>
  }

  export type UsuarioUpdateWithoutResenasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUpdateOneWithoutManagerNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutResenasMesaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type RestauranteCreateWithoutPlantillasBolsaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    manager: UsuarioCreateNestedOneWithoutRestauranteInput
    turnos?: TurnoCreateNestedManyWithoutRestauranteInput
    promos?: PromocionCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutPlantillasBolsaInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutRestauranteInput
    promos?: PromocionUncheckedCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput
    publicaciones?: PublicacionBolsaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutPlantillasBolsaInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutPlantillasBolsaInput, RestauranteUncheckedCreateWithoutPlantillasBolsaInput>
  }

  export type PublicacionBolsaCreateWithoutPlantillaInput = {
    id?: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPublicacionesInput
    reservas?: ReservaBolsaCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionBolsaUncheckedCreateWithoutPlantillaInput = {
    id?: string
    restauranteId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservas?: ReservaBolsaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionBolsaCreateOrConnectWithoutPlantillaInput = {
    where: PublicacionBolsaWhereUniqueInput
    create: XOR<PublicacionBolsaCreateWithoutPlantillaInput, PublicacionBolsaUncheckedCreateWithoutPlantillaInput>
  }

  export type PublicacionBolsaCreateManyPlantillaInputEnvelope = {
    data: PublicacionBolsaCreateManyPlantillaInput | PublicacionBolsaCreateManyPlantillaInput[]
    skipDuplicates?: boolean
  }

  export type RestauranteUpsertWithoutPlantillasBolsaInput = {
    update: XOR<RestauranteUpdateWithoutPlantillasBolsaInput, RestauranteUncheckedUpdateWithoutPlantillasBolsaInput>
    create: XOR<RestauranteCreateWithoutPlantillasBolsaInput, RestauranteUncheckedCreateWithoutPlantillasBolsaInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutPlantillasBolsaInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutPlantillasBolsaInput, RestauranteUncheckedUpdateWithoutPlantillasBolsaInput>
  }

  export type RestauranteUpdateWithoutPlantillasBolsaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UsuarioUpdateOneRequiredWithoutRestauranteNestedInput
    turnos?: TurnoUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutPlantillasBolsaInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUncheckedUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type PublicacionBolsaUpsertWithWhereUniqueWithoutPlantillaInput = {
    where: PublicacionBolsaWhereUniqueInput
    update: XOR<PublicacionBolsaUpdateWithoutPlantillaInput, PublicacionBolsaUncheckedUpdateWithoutPlantillaInput>
    create: XOR<PublicacionBolsaCreateWithoutPlantillaInput, PublicacionBolsaUncheckedCreateWithoutPlantillaInput>
  }

  export type PublicacionBolsaUpdateWithWhereUniqueWithoutPlantillaInput = {
    where: PublicacionBolsaWhereUniqueInput
    data: XOR<PublicacionBolsaUpdateWithoutPlantillaInput, PublicacionBolsaUncheckedUpdateWithoutPlantillaInput>
  }

  export type PublicacionBolsaUpdateManyWithWhereWithoutPlantillaInput = {
    where: PublicacionBolsaScalarWhereInput
    data: XOR<PublicacionBolsaUpdateManyMutationInput, PublicacionBolsaUncheckedUpdateManyWithoutPlantillaInput>
  }

  export type RestauranteCreateWithoutPublicacionesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    manager: UsuarioCreateNestedOneWithoutRestauranteInput
    turnos?: TurnoCreateNestedManyWithoutRestauranteInput
    promos?: PromocionCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutPublicacionesInput = {
    id?: string
    managerId: string
    nombre: string
    descripcion?: string | null
    direccion: string
    ciudad: string
    barrio?: string | null
    lat?: number | null
    lng?: number | null
    telefono?: string | null
    email?: string | null
    sitioWeb?: string | null
    tipoCocina?: RestauranteCreatetipoCocinaInput | string[]
    precioMedio: number
    capacidadTotal: number
    estado?: $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteCreatefotosInput | string[]
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutRestauranteInput
    promos?: PromocionUncheckedCreateNestedManyWithoutRestauranteInput
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutRestauranteInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutPublicacionesInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutPublicacionesInput, RestauranteUncheckedCreateWithoutPublicacionesInput>
  }

  export type BolsaSorpresaPlantillaCreateWithoutPublicacionesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPlantillasBolsaInput
  }

  export type BolsaSorpresaPlantillaUncheckedCreateWithoutPublicacionesInput = {
    id?: string
    restauranteId: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type BolsaSorpresaPlantillaCreateOrConnectWithoutPublicacionesInput = {
    where: BolsaSorpresaPlantillaWhereUniqueInput
    create: XOR<BolsaSorpresaPlantillaCreateWithoutPublicacionesInput, BolsaSorpresaPlantillaUncheckedCreateWithoutPublicacionesInput>
  }

  export type ReservaBolsaCreateWithoutPublicacionInput = {
    id?: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasBolsaInput
    resena?: ResenaBolsaCreateNestedOneWithoutReservaInput
  }

  export type ReservaBolsaUncheckedCreateWithoutPublicacionInput = {
    id?: string
    clienteId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    resena?: ResenaBolsaUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaBolsaCreateOrConnectWithoutPublicacionInput = {
    where: ReservaBolsaWhereUniqueInput
    create: XOR<ReservaBolsaCreateWithoutPublicacionInput, ReservaBolsaUncheckedCreateWithoutPublicacionInput>
  }

  export type ReservaBolsaCreateManyPublicacionInputEnvelope = {
    data: ReservaBolsaCreateManyPublicacionInput | ReservaBolsaCreateManyPublicacionInput[]
    skipDuplicates?: boolean
  }

  export type RestauranteUpsertWithoutPublicacionesInput = {
    update: XOR<RestauranteUpdateWithoutPublicacionesInput, RestauranteUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<RestauranteCreateWithoutPublicacionesInput, RestauranteUncheckedCreateWithoutPublicacionesInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutPublicacionesInput, RestauranteUncheckedUpdateWithoutPublicacionesInput>
  }

  export type RestauranteUpdateWithoutPublicacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UsuarioUpdateOneRequiredWithoutRestauranteNestedInput
    turnos?: TurnoUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutPublicacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sitioWeb?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCocina?: RestauranteUpdatetipoCocinaInput | string[]
    precioMedio?: IntFieldUpdateOperationsInput | number
    capacidadTotal?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoRestauranteFieldUpdateOperationsInput | $Enums.EstadoRestaurante
    servicios?: JsonNullValueInput | InputJsonValue
    fotos?: RestauranteUpdatefotosInput | string[]
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutRestauranteNestedInput
    promos?: PromocionUncheckedUpdateManyWithoutRestauranteNestedInput
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutRestauranteNestedInput
    plantillasBolsa?: BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type BolsaSorpresaPlantillaUpsertWithoutPublicacionesInput = {
    update: XOR<BolsaSorpresaPlantillaUpdateWithoutPublicacionesInput, BolsaSorpresaPlantillaUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<BolsaSorpresaPlantillaCreateWithoutPublicacionesInput, BolsaSorpresaPlantillaUncheckedCreateWithoutPublicacionesInput>
    where?: BolsaSorpresaPlantillaWhereInput
  }

  export type BolsaSorpresaPlantillaUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: BolsaSorpresaPlantillaWhereInput
    data: XOR<BolsaSorpresaPlantillaUpdateWithoutPublicacionesInput, BolsaSorpresaPlantillaUncheckedUpdateWithoutPublicacionesInput>
  }

  export type BolsaSorpresaPlantillaUpdateWithoutPublicacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPlantillasBolsaNestedInput
  }

  export type BolsaSorpresaPlantillaUncheckedUpdateWithoutPublicacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaBolsaUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: ReservaBolsaWhereUniqueInput
    update: XOR<ReservaBolsaUpdateWithoutPublicacionInput, ReservaBolsaUncheckedUpdateWithoutPublicacionInput>
    create: XOR<ReservaBolsaCreateWithoutPublicacionInput, ReservaBolsaUncheckedCreateWithoutPublicacionInput>
  }

  export type ReservaBolsaUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: ReservaBolsaWhereUniqueInput
    data: XOR<ReservaBolsaUpdateWithoutPublicacionInput, ReservaBolsaUncheckedUpdateWithoutPublicacionInput>
  }

  export type ReservaBolsaUpdateManyWithWhereWithoutPublicacionInput = {
    where: ReservaBolsaScalarWhereInput
    data: XOR<ReservaBolsaUpdateManyMutationInput, ReservaBolsaUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type UsuarioCreateWithoutReservasBolsaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteCreateNestedOneWithoutManagerInput
  }

  export type UsuarioUncheckedCreateWithoutReservasBolsaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaUncheckedCreateNestedManyWithoutClienteInput
    resenasBolsa?: ResenaBolsaUncheckedCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteUncheckedCreateNestedOneWithoutManagerInput
  }

  export type UsuarioCreateOrConnectWithoutReservasBolsaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasBolsaInput, UsuarioUncheckedCreateWithoutReservasBolsaInput>
  }

  export type PublicacionBolsaCreateWithoutReservasInput = {
    id?: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPublicacionesInput
    plantilla: BolsaSorpresaPlantillaCreateNestedOneWithoutPublicacionesInput
  }

  export type PublicacionBolsaUncheckedCreateWithoutReservasInput = {
    id?: string
    restauranteId: string
    plantillaId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PublicacionBolsaCreateOrConnectWithoutReservasInput = {
    where: PublicacionBolsaWhereUniqueInput
    create: XOR<PublicacionBolsaCreateWithoutReservasInput, PublicacionBolsaUncheckedCreateWithoutReservasInput>
  }

  export type ResenaBolsaCreateWithoutReservaInput = {
    id?: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutResenasBolsaInput
  }

  export type ResenaBolsaUncheckedCreateWithoutReservaInput = {
    id?: string
    clienteId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaBolsaCreateOrConnectWithoutReservaInput = {
    where: ResenaBolsaWhereUniqueInput
    create: XOR<ResenaBolsaCreateWithoutReservaInput, ResenaBolsaUncheckedCreateWithoutReservaInput>
  }

  export type UsuarioUpsertWithoutReservasBolsaInput = {
    update: XOR<UsuarioUpdateWithoutReservasBolsaInput, UsuarioUncheckedUpdateWithoutReservasBolsaInput>
    create: XOR<UsuarioCreateWithoutReservasBolsaInput, UsuarioUncheckedCreateWithoutReservasBolsaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasBolsaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasBolsaInput, UsuarioUncheckedUpdateWithoutReservasBolsaInput>
  }

  export type UsuarioUpdateWithoutReservasBolsaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUpdateOneWithoutManagerNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReservasBolsaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUncheckedUpdateManyWithoutClienteNestedInput
    resenasBolsa?: ResenaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type PublicacionBolsaUpsertWithoutReservasInput = {
    update: XOR<PublicacionBolsaUpdateWithoutReservasInput, PublicacionBolsaUncheckedUpdateWithoutReservasInput>
    create: XOR<PublicacionBolsaCreateWithoutReservasInput, PublicacionBolsaUncheckedCreateWithoutReservasInput>
    where?: PublicacionBolsaWhereInput
  }

  export type PublicacionBolsaUpdateToOneWithWhereWithoutReservasInput = {
    where?: PublicacionBolsaWhereInput
    data: XOR<PublicacionBolsaUpdateWithoutReservasInput, PublicacionBolsaUncheckedUpdateWithoutReservasInput>
  }

  export type PublicacionBolsaUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPublicacionesNestedInput
    plantilla?: BolsaSorpresaPlantillaUpdateOneRequiredWithoutPublicacionesNestedInput
  }

  export type PublicacionBolsaUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    plantillaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaBolsaUpsertWithoutReservaInput = {
    update: XOR<ResenaBolsaUpdateWithoutReservaInput, ResenaBolsaUncheckedUpdateWithoutReservaInput>
    create: XOR<ResenaBolsaCreateWithoutReservaInput, ResenaBolsaUncheckedCreateWithoutReservaInput>
    where?: ResenaBolsaWhereInput
  }

  export type ResenaBolsaUpdateToOneWithWhereWithoutReservaInput = {
    where?: ResenaBolsaWhereInput
    data: XOR<ResenaBolsaUpdateWithoutReservaInput, ResenaBolsaUncheckedUpdateWithoutReservaInput>
  }

  export type ResenaBolsaUpdateWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutResenasBolsaNestedInput
  }

  export type ResenaBolsaUncheckedUpdateWithoutReservaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaBolsaCreateWithoutResenaInput = {
    id?: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasBolsaInput
    publicacion: PublicacionBolsaCreateNestedOneWithoutReservasInput
  }

  export type ReservaBolsaUncheckedCreateWithoutResenaInput = {
    id?: string
    clienteId: string
    publicacionId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaBolsaCreateOrConnectWithoutResenaInput = {
    where: ReservaBolsaWhereUniqueInput
    create: XOR<ReservaBolsaCreateWithoutResenaInput, ReservaBolsaUncheckedCreateWithoutResenaInput>
  }

  export type UsuarioCreateWithoutResenasBolsaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteCreateNestedOneWithoutManagerInput
  }

  export type UsuarioUncheckedCreateWithoutResenasBolsaInput = {
    id?: string
    email: string
    passwordHash?: string | null
    nombre: string
    telefono?: string | null
    rol?: $Enums.Rol
    idioma?: string
    moneda?: string
    dietaPreferencia?: UsuarioCreatedietaPreferenciaInput | string[]
    puntos?: number
    noShowCount?: number
    altoRiesgo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    reservasMesa?: ReservaMesaUncheckedCreateNestedManyWithoutClienteInput
    reservasBolsa?: ReservaBolsaUncheckedCreateNestedManyWithoutClienteInput
    resenasMesa?: ResenaMesaUncheckedCreateNestedManyWithoutClienteInput
    restaurante?: RestauranteUncheckedCreateNestedOneWithoutManagerInput
  }

  export type UsuarioCreateOrConnectWithoutResenasBolsaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResenasBolsaInput, UsuarioUncheckedCreateWithoutResenasBolsaInput>
  }

  export type ReservaBolsaUpsertWithoutResenaInput = {
    update: XOR<ReservaBolsaUpdateWithoutResenaInput, ReservaBolsaUncheckedUpdateWithoutResenaInput>
    create: XOR<ReservaBolsaCreateWithoutResenaInput, ReservaBolsaUncheckedCreateWithoutResenaInput>
    where?: ReservaBolsaWhereInput
  }

  export type ReservaBolsaUpdateToOneWithWhereWithoutResenaInput = {
    where?: ReservaBolsaWhereInput
    data: XOR<ReservaBolsaUpdateWithoutResenaInput, ReservaBolsaUncheckedUpdateWithoutResenaInput>
  }

  export type ReservaBolsaUpdateWithoutResenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasBolsaNestedInput
    publicacion?: PublicacionBolsaUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaBolsaUncheckedUpdateWithoutResenaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    publicacionId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutResenasBolsaInput = {
    update: XOR<UsuarioUpdateWithoutResenasBolsaInput, UsuarioUncheckedUpdateWithoutResenasBolsaInput>
    create: XOR<UsuarioCreateWithoutResenasBolsaInput, UsuarioUncheckedCreateWithoutResenasBolsaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResenasBolsaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResenasBolsaInput, UsuarioUncheckedUpdateWithoutResenasBolsaInput>
  }

  export type UsuarioUpdateWithoutResenasBolsaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUpdateOneWithoutManagerNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutResenasBolsaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    idioma?: StringFieldUpdateOperationsInput | string
    moneda?: StringFieldUpdateOperationsInput | string
    dietaPreferencia?: UsuarioUpdatedietaPreferenciaInput | string[]
    puntos?: IntFieldUpdateOperationsInput | number
    noShowCount?: IntFieldUpdateOperationsInput | number
    altoRiesgo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutClienteNestedInput
    reservasBolsa?: ReservaBolsaUncheckedUpdateManyWithoutClienteNestedInput
    resenasMesa?: ResenaMesaUncheckedUpdateManyWithoutClienteNestedInput
    restaurante?: RestauranteUncheckedUpdateOneWithoutManagerNestedInput
  }

  export type ReservaMesaCreateManyClienteInput = {
    id?: string
    restauranteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaBolsaCreateManyClienteInput = {
    id?: string
    publicacionId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ResenaMesaCreateManyClienteInput = {
    id?: string
    reservaId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ResenaBolsaCreateManyClienteInput = {
    id?: string
    reservaId: string
    rating: number
    comentario?: string | null
    creadoEn?: Date | string
  }

  export type ReservaMesaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutReservasMesaNestedInput
    promocion?: PromocionUpdateOneWithoutReservasMesaNestedInput
    resena?: ResenaMesaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaMesaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaBolsaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionBolsaUpdateOneRequiredWithoutReservasNestedInput
    resena?: ResenaBolsaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaBolsaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicacionId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaBolsaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaBolsaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicacionId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaMesaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaMesaUpdateOneRequiredWithoutResenaNestedInput
  }

  export type ResenaMesaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaMesaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaBolsaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaBolsaUpdateOneRequiredWithoutResenaNestedInput
  }

  export type ResenaBolsaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenaBolsaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservaId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoCreateManyRestauranteInput = {
    id?: string
    nombre: string
    diasSemana?: TurnoCreatediasSemanaInput | number[]
    horaInicio: string
    horaFin: string
    intervaloMin?: number
    capacidad: number
    activo?: boolean
    creadoEn?: Date | string
  }

  export type PromocionCreateManyRestauranteInput = {
    id?: string
    nombre: string
    tipo: $Enums.TipoPromo
    valor: number
    condiciones?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    diasSemana?: PromocionCreatediasSemanaInput | number[]
    horaInicio?: string | null
    horaFin?: string | null
    estado?: $Enums.EstadoPromo
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaMesaCreateManyRestauranteInput = {
    id?: string
    clienteId: string
    promocionId?: string | null
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type BolsaSorpresaPlantillaCreateManyRestauranteInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: number
    valorEstimado: number
    etiquetasDieta?: BolsaSorpresaPlantillaCreateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaCreatetipComidaInput | string[]
    condiciones?: string | null
    politicaReembolso?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PublicacionBolsaCreateManyRestauranteInput = {
    id?: string
    plantillaId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type TurnoUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    diasSemana?: TurnoUpdatediasSemanaInput | number[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    intervaloMin?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocionUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservasMesa?: ReservaMesaUncheckedUpdateManyWithoutPromocionNestedInput
  }

  export type PromocionUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPromoFieldUpdateOperationsInput | $Enums.TipoPromo
    valor?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diasSemana?: PromocionUpdatediasSemanaInput | number[]
    horaInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoPromoFieldUpdateOperationsInput | $Enums.EstadoPromo
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaMesaUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasMesaNestedInput
    promocion?: PromocionUpdateOneWithoutReservasMesaNestedInput
    resena?: ResenaMesaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaMesaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    promocionId?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BolsaSorpresaPlantillaUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionBolsaUpdateManyWithoutPlantillaNestedInput
  }

  export type BolsaSorpresaPlantillaUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionBolsaUncheckedUpdateManyWithoutPlantillaNestedInput
  }

  export type BolsaSorpresaPlantillaUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    valorEstimado?: FloatFieldUpdateOperationsInput | number
    etiquetasDieta?: BolsaSorpresaPlantillaUpdateetiquetasDietaInput | string[]
    tipComida?: BolsaSorpresaPlantillaUpdatetipComidaInput | string[]
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    politicaReembolso?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionBolsaUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    plantilla?: BolsaSorpresaPlantillaUpdateOneRequiredWithoutPublicacionesNestedInput
    reservas?: ReservaBolsaUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionBolsaUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantillaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaBolsaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionBolsaUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantillaId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaMesaCreateManyPromocionInput = {
    id?: string
    clienteId: string
    restauranteId: string
    fecha: Date | string
    hora: string
    comensales: number
    estado?: $Enums.EstadoReserva
    codigo?: string
    notas?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaMesaUpdateWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasMesaNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutReservasMesaNestedInput
    resena?: ResenaMesaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaMesaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaMesaUncheckedUpdateManyWithoutPromocionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    comensales?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    codigo?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionBolsaCreateManyPlantillaInput = {
    id?: string
    restauranteId: string
    fecha: Date | string
    franjaInicio: string
    franjaFin: string
    unidadesTotales: number
    unidadesVendidas?: number
    estado?: $Enums.EstadoPublicacion
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PublicacionBolsaUpdateWithoutPlantillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPublicacionesNestedInput
    reservas?: ReservaBolsaUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionBolsaUncheckedUpdateWithoutPlantillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaBolsaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionBolsaUncheckedUpdateManyWithoutPlantillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    franjaInicio?: StringFieldUpdateOperationsInput | string
    franjaFin?: StringFieldUpdateOperationsInput | string
    unidadesTotales?: IntFieldUpdateOperationsInput | number
    unidadesVendidas?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoPublicacionFieldUpdateOperationsInput | $Enums.EstadoPublicacion
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaBolsaCreateManyPublicacionInput = {
    id?: string
    clienteId: string
    unidades?: number
    estado?: $Enums.EstadoBolsa
    codigo?: string
    metodoPago?: $Enums.MetodoPago
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ReservaBolsaUpdateWithoutPublicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasBolsaNestedInput
    resena?: ResenaBolsaUpdateOneWithoutReservaNestedInput
  }

  export type ReservaBolsaUncheckedUpdateWithoutPublicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    resena?: ResenaBolsaUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaBolsaUncheckedUpdateManyWithoutPublicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    unidades?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBolsaFieldUpdateOperationsInput | $Enums.EstadoBolsa
    codigo?: StringFieldUpdateOperationsInput | string
    metodoPago?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestauranteCountOutputTypeDefaultArgs instead
     */
    export type RestauranteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestauranteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromocionCountOutputTypeDefaultArgs instead
     */
    export type PromocionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromocionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BolsaSorpresaPlantillaCountOutputTypeDefaultArgs instead
     */
    export type BolsaSorpresaPlantillaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BolsaSorpresaPlantillaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicacionBolsaCountOutputTypeDefaultArgs instead
     */
    export type PublicacionBolsaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicacionBolsaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestauranteDefaultArgs instead
     */
    export type RestauranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestauranteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoDefaultArgs instead
     */
    export type TurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromocionDefaultArgs instead
     */
    export type PromocionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromocionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservaMesaDefaultArgs instead
     */
    export type ReservaMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservaMesaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResenaMesaDefaultArgs instead
     */
    export type ResenaMesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResenaMesaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BolsaSorpresaPlantillaDefaultArgs instead
     */
    export type BolsaSorpresaPlantillaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BolsaSorpresaPlantillaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicacionBolsaDefaultArgs instead
     */
    export type PublicacionBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicacionBolsaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservaBolsaDefaultArgs instead
     */
    export type ReservaBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservaBolsaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResenaBolsaDefaultArgs instead
     */
    export type ResenaBolsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResenaBolsaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}