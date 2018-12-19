export interface Posting {
    readonly positionName: string;
    readonly location: string;
    readonly link: string;
}

export interface CompanyState {
    readonly company: {
        readonly name: string;
        readonly description: string;
        readonly postings: Posting[];
        readonly fetching?: boolean;
        readonly fetched?: boolean;
        readonly error?: any;
    };
}

export interface CompanyDispatchProps {
    getCompanyByName: (name: string) => any;
}
