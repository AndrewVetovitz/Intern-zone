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
            readonly name: string;
        }
    };
    readonly description: string;
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

function companyDescription(description: string, classes: any): JSX.Element {
    return (
        <Typography className={classes} component="p">
            {description}
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
            link: 'https://google.com'
        },
        {
            positionName: 'software',
            location: 'california',
            link: 'https://google.com'
        },
        {
            positionName: 'software',
            location: 'california',
            link: 'https://google.com'
        }
    ];

    let _description: string = 'Amazon.com, Inc., doing business as Amazon (/ˈæməˌzɒn/), is an American electronic commerce and cloud computing company based in Seattle, Washington, that was founded by Jeff Bezos on July 5, 1994. The tech giant is the largest Internet retailer in the world as measured by revenue and market capitalization, and second largest after Alibaba Group in terms of total sales.[5] The Amazon.com website started as an online bookstore and later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world\'s largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary.[6] Amazon also sells certain low-end products under its in-house brand AmazonBasics.';

    const header: JSX.Element = companyHeader(name, classes.header);
    const description: JSX.Element = companyDescription(_description, classes);
    const table: JSX.Element | JSX.Element[] = companyPosting(_postings, classes);

    return (
        <React.Fragment>
            {header}
            <br/>
            {description}
            <br/>
            {table}
        </React.Fragment>
    );
}

export default withStyles(styles)(Company);
