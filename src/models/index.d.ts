import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUntitledModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UntitledModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly tags?: string | null;
  readonly category?: string | null;
  readonly afirmacion?: string | null;
  readonly analisis?: string | null;
  readonly veredicto?: string | null;
  readonly imag?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUntitledModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UntitledModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly tags?: string | null;
  readonly category?: string | null;
  readonly afirmacion?: string | null;
  readonly analisis?: string | null;
  readonly veredicto?: string | null;
  readonly imag?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UntitledModel = LazyLoading extends LazyLoadingDisabled ? EagerUntitledModel : LazyUntitledModel

export declare const UntitledModel: (new (init: ModelInit<UntitledModel>) => UntitledModel) & {
  copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel>) => MutableModel<UntitledModel> | void): UntitledModel;
}