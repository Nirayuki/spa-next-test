import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import navitems from '../navitems';


export default function Navbar(){
    return(
        <Grid container spacing={2} direction="column">
            {navitems.map((item) => (
                <Grid item key={item.id}>
                    <Link href={item.href}>
                       <a>* {item.nome}</a>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}