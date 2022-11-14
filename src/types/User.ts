export interface User {
  name: string;
  email: string;
}

export interface Participants {
  OrganisationId: string;
  Status: string;
  OrganisationName: string;
  CreatedOn: string;
  LegalEntityName: string;
  CountryOfRegistration: string;
  CompanyRegister: string;
  Tag: any;
  Size: any;
  RegistrationNumber: string;
  RegistrationId: string;
  RegisteredName: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  Postcode: string;
  Country: string;
  ParentOrganisationReference: string;
  AuthorisationServers: AuthorisationServer[];
  OrgDomainClaims: OrgDomainClaim[];
  OrgDomainRoleClaims: OrgDomainRoleClaim[];
}

export interface AuthorisationServer {
  AuthorisationServerId: string;
  AutoRegistrationSupported: boolean;
  AutoRegistrationNotificationWebhook: any;
  SupportsCiba: boolean;
  SupportsDCR: boolean;
  ApiResources: ApiResource[];
  AuthorisationServerCertifications: any[];
  CustomerFriendlyDescription: string;
  CustomerFriendlyLogoUri: string;
  CustomerFriendlyName: string;
  DeveloperPortalUri: string;
  TermsOfServiceUri: string;
  NotificationWebhookAddedDate: any;
  OpenIDDiscoveryDocument: string;
  Issuer: any;
  PayloadSigningCertLocationUri: string;
  ParentAuthorisationServerId: any;
  DeprecatedDate: any;
  RetirementDate: any;
  SupersededByAuthorisationServerId: any;
}

export interface ApiResource {
  ApiResourceId: string;
  ApiVersion: string;
  ApiDiscoveryEndpoints: ApiDiscoveryEndpoint[];
  FamilyComplete: boolean;
  ApiCertificationUri: any;
  CertificationStatus: any;
  CertificationStartDate: any;
  CertificationExpirationDate: any;
  ApiFamilyType: string;
}

export interface ApiDiscoveryEndpoint {
  ApiDiscoveryId: string;
  ApiEndpoint: string;
}

export interface OrgDomainClaim {
  AuthorisationDomainName: string;
  AuthorityName: string;
  RegistrationId: string;
  Status: string;
}

export interface OrgDomainRoleClaim {
  Status: string;
  AuthorisationDomain: string;
  Role: string;
  Authorisations: any[];
  RegistrationId: string;
}
