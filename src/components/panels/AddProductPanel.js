import React from "react";

import { AddProduct } from "components/products/widgets/AddProduct";

import {PanelStlyes, PanelBody, PanelHeader} from './styles'

function AddProductPanel({title, ...props}) {
    return (
        <PanelStlyes>
            <PanelHeader>
            <h2>{title || "Display Panel"}</h2>
            </PanelHeader>
            <PanelBody>
                <AddProduct/>
            </PanelBody>
        </PanelStlyes>
    )
}

export default AddProductPanel;