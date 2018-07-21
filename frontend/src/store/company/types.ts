export interface CompanyState {
    readonly companyInfo: {
        companyNames: string[];
        fetching?: boolean;
        fetched?: boolean;
        error?: any;
    };
}

export interface CompanyDispatchProps {
    getAllCompanyNames: () => any;
}
