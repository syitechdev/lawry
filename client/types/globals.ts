interface InformationGeneraleForm {
  denomination: string;
  siege: string;
  telephone: string;
  email: string;
  duree: string;
  capital: string;
  objet: string;
}
interface ActionnaireFondateur {
  noms?: string;
  nationalite?: string;
  adresse?: string;
  actions?: number;
}
interface RepresentationLegale {
  noms: string;
  adresse: string;
  email: string;
  telephone: string;
}
interface ModaliteAdministrative {
  modeDecision: string;
  organeGestion: string;
}
interface DocumentSas {
  projetStatus?: File;
  attestationDepotFond?: File;
  declarationSouscription?: File;
  listeActionnaires?: File;
  justificatifDomiciliation?: File;
}
type ActionnairesFondateursForm = Array<ActionnaireFondateur>;
type SasForm = {
  informations: InformationGeneraleForm;
  actionnaires: ActionnaireFondateur[];
  representation: RepresentationLegale;
  modalite: ModaliteAdministrative,
  documents: DocumentSas
}

export type {
  SasForm,
  DocumentSas,
  RepresentationLegale,
  ModaliteAdministrative,
  InformationGeneraleForm,
  ActionnairesFondateursForm,
};
