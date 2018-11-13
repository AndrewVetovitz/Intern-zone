import * as React from 'react';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CompanyTable from '../CompanyTable/CompanyTable';

const headerSize = 'h1';

const styles = createStyles({
    header: {
        color: '#888'
    }
});

export interface Posting {
    readonly positionName: string;
    readonly location: string;
    readonly link: string;
}

export interface Props {
    readonly match: {
        readonly params: {
            readonly name: string
        }
    };
    readonly postings: Posting[];
}

export interface CompanyProps extends Props, WithStyles<typeof styles> {}

function companyHeader(name: string, classes: string): JSX.Element {
    return (
        <Typography variant="headline" className={classes} component={headerSize}>
            {name}
        </Typography>
    );
}

function companyPosting(postings: Posting[], classes: any): JSX.Element | JSX.Element[] {
    console.log(postings);

    if (postings.length > 0) {
        return <CompanyTable data={postings}/>;
    }

    return <React.Fragment/>;
}

function Company(props: CompanyProps): JSX.Element {
    const { classes } = props;
    const name = props.match.params.name;

    let _postings: Posting[] = [
        {
            positionName: 'software',
            location: 'california',
            link: '_test'
        },
        {
            positionName: 'software',
            location: 'california',
            link: '_test'
        },
        {
            positionName: 'software',
            location: 'california',
            link: '_test'
        }
    ];

    const header: JSX.Element = companyHeader(name, classes.header);
    const table: JSX.Element | JSX.Element[] = companyPosting(_postings, classes);

    return (
        <React.Fragment>
            {header}
            {table}
        </React.Fragment>
    );
}

export default withStyles(styles)(Company);
