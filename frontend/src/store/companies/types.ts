export interface CompaniesState {
    readonly companies: {
        readonly companyNames: string[];
        readonly fetching?: boolean;
        readonly fetched?: boolean;
        readonly error?: any;
    };
}

export interface CompanyDispatchProps {
    getAllCompanyNames: () => any;
}
