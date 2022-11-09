import React, {useEffect, useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import axios from "axios";
import '../../styles/Uy.css';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Uy = () => {
    const [uy, setUy] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }

    const saveUy = () => {
        let UmmumiyMaydon = byId("maydon");
        let Oshhona = byId("oshxona");
        let MehmonHona = byId("mexmonxona");
        let Yotohona = byId("yotoq");
        let Balkon = byId("balkon");
        let Nomi = byId("nomi");
        let Kv_qiymadi = byId("kv_qiymati");
        let Kirish = byId("kirish");
        let Uy_raqami = byId("uy_raqami");
        let BinoRaqami = byId("bino_raqami");
        let Etaji = byId("etaji");
        let Tipi = byId("tepi");
        let obj = {
            UmmumiyMaydon, Oshhona, MehmonHona, Yotohona, Balkon, Nomi, Kv_qiymadi, Kirish, Uy_raqami, BinoRaqami, Etaji, Tipi
        }
        axios.post("https://houses-adminpanel.herokuapp.com/api/bino", obj);
    }

    const byId = (id) => document.getElementById(id).value;



    useEffect(() => {
        console.log("start")
        axios.get("https://houses-adminpanel.herokuapp.com/api/bino")
            .then(res => {
                setUy(res.data.data);
            })
        console.log("aa")
    }, []);


    console.log(uy);
    return (
        <div className='obyekt'>
            <h1>Uy</h1>
            <div className="obyekt-item">
                <form className='obyekt-item__form'>
                    <input className='obyekt-item__search' type="text" placeholder='Input search text'/>
                    <button className="search-btn"><AiOutlineSearch/></button>
                </form>

                <div className="obyekt-item__card">
                    <h2>Uylar</h2>
                    <button onClick={openModal} ><p>+</p></button>
                </div>

                <div className="obyect-item-content">
                    <div className="obyect-item-content__top">
                        <p>Nomi</p>
                        <p>Manzil</p>
                        <p>Maydoni</p>
                        <p>Padezlar soni</p>
                        <p>Umumiy Xonalar soni</p>
                        <p>Bir Xonalilar soni</p>
                        <p>Ikki xonalilar soni</p>
                        <p>Uch xonalilar soni</p>
                        <p>To'rt xonalilar soni</p>
                        <p>Besh xonalilar soni</p>
                    </div>
                    {uy && uy.map((item, i) =>
                        <div className="obyect-item-content__bottom">
                            <p>{item.Nomi}</p>
                            <p>Amir Temur 105 a uy</p>
                            <p>{item.UmmumiyKvadrati}</p>
                            <p>{item.PodezlarSoni}</p>
                            <p>{item.HonalarSoni}</p>
                            <p>30</p>
                            <p>130</p>
                            <p>100</p>
                            <p>60</p>
                            <p>40</p>
                            <p>
                                <button>O'chirish</button>
                            </p>
                            <p>
                                <button>Qo'shish</button>
                            </p>
                            <p>
                                <button>O'zgartrish</button>
                            </p>
                        </div>
                    )}

                </div>
            </div>
            <Modal isOpen={modal}>
                <ModalHeader>
                    Uy qushish
                </ModalHeader>
                <ModalBody>
                    <Input className="mt-2" id="maydon" type="text" placeholder="umumiy maydoni"/>
                    <Input className="mt-2" id="oshxona" type="text" placeholder="oshxona"/>
                    <Input className="mt-2" id="mexmonxona" type="text" placeholder="mexmonxona"/>
                    <Input className="mt-2" id="yotoq" type="text" placeholder="yotoq xona"/>
                    <Input className="mt-2" id="balkon" type="text" placeholder="balkon"/>
                    <Input className="mt-2" id="nomi" type="text" placeholder="nomi"/>
                    <Input className="mt-2" id="kv_qiymati" type="text" placeholder="kv qiymati"/>
                    <Input className="mt-2" id="kirish" type="text" placeholder="kirinsh"/>
                    <Input className="mt-2" id="uy_raqami" type="text" placeholder="Uy raqami"/>
                    <Input className="mt-2" id="bino_raqami" type="text" placeholder="bino raqami"/>
                    <Input className="mt-2" id="etaji" type="text" placeholder="etaji"/>
                    <Input className="mt-2" id="tepi" type="text" placeholder="tepi"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openModal}>Cancel</Button>
                    <Button color="success" onClick={saveUy}>Save</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Uy
