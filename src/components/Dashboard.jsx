import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <p>
                this is products
            </p>
            <Link to="products" >goto products</Link>
        </div>
    )
}
