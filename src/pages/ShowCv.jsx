import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import cv from "../assets/Nauman_Cv.pdf"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

const ShowCv = () => {
    const docs = [

        { uri: cv }

    ];
    return (
        <>
        <div className="cv-page">
            <h3 style={{textAlign: "center", padding: "1rem"}}>MERN Enthusiast | Crafting Digital Experiences</h3>
            
            <DocViewer
                    documents={docs}
                    initialActiveDocument={docs[0]}
                    pluginRenderers={DocViewerRenderers}
                    config={{
                        header: {
                          disableHeader: true,
                        }}}
                />
                </div>
               
        </>
    )
}

export default ShowCv
