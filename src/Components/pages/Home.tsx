import React, {useEffect} from "react";
import {usePicturesActions} from "../../hooks/useActions.hook";
import {useRequest} from "../../hooks/useRequest.hook";
import PicturesAll from "../Pictures/PicturesAll/PicturesAll";
import PicturesGroup from "../Pictures/PicturesGrouped/PicturesGroup";


function Home() {

    const {getPictures} = usePicturesActions()
    const {request} = useRequest()
    useEffect(() => {
        getPictures(request, ['cat', 'cat', 'dog', 'cow'])
    }, [])

    return (
        <section className="container">
            <PicturesAll />
            {/*<PicturesGroup />*/}

        </section>

    )
}

export default Home