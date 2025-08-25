import React from 'react'
import Header from '../Header';
import SidebarBag from '../SidebarBag';
import ProductsList from '../ProductsList';
import ExclusiveSection from '../ExclusiveSection';
import TestimonialsList from '../TestimonialsList';

export default function HomePage({
    produtos,
    addProductToBag,
}) {
    return (
        <>
            <Header />
            <div className="page-inner-content">
                <div className="section-title">
                    <h3>Produtos Selecionados</h3>
                    <div className="underline"></div>
                </div>
                <div className="main-content">
                    <ProductsList
                        addProductToBag={addProductToBag}
                        produtos={produtos}
                    />
                </div>
            </div>
        <ExclusiveSection />
        <TestimonialsList />
        </>
    );
}
