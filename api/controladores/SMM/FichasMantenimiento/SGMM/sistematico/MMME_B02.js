'use strict'

var mmmeB02 = require('../../../../../models/SMM/fichasMantenimiento/SGMM/sistematico/MMME_B02');

const MMME_B02 = {};

MMME_B02.getMMME_B02Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeB02.findById(id)
    res.json(maintenance)
};
MMME_B02.editMMME_B02Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_B02 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        nivelAM1e1R: req.body || false,
        nivelAM1e1A: req.body || false,
        nivelAM1e2R: req.body || false,
        nivelAM1e2A: req.body || false,
        nivelAM2e1R: req.body || false,
        nivelAM2e1A: req.body || false,
        nivelAM2e2R: req.body || false,
        nivelAM2e2A: req.body || false,

        taponesMM1e1L: req.body || false,
        taponesMM1e1R: req.body || false,
        taponesMM1e1A: req.body || false,
        taponesMM1e2L: req.body || false,
        taponesMM1e2R: req.body || false,
        taponesMM1e2A: req.body || false,
        taponesMM2e1L: req.body || false,
        taponesMM2e1R: req.body || false,
        taponesMM2e1A: req.body || false,
        taponesMM2e2L: req.body || false,
        taponesMM2e2R: req.body || false,
        taponesMM2e2A: req.body || false,

        tornillosAM1e1L: req.body || false,
        tornillosAM1e1R: req.body || false,
        tornillosAM1e1A: req.body || false,
        tornillosAM1e2L: req.body || false,
        tornillosAM1e2R: req.body || false,
        tornillosAM1e2A: req.body || false,
        tornillosAM2e1L: req.body || false,
        tornillosAM2e1R: req.body || false,
        tornillosAM2e1A: req.body || false,
        tornillosAM2e2L: req.body || false,
        tornillosAM2e2R: req.body || false,
        tornillosAM2e2A: req.body || false,

        respiraderosM1e1L: req.body || false,
        respiraderosM1e1R: req.body || false,
        respiraderosM1e1A: req.body || false,
        respiraderosM1e2L: req.body || false,
        respiraderosM1e2R: req.body || false,
        respiraderosM1e2A: req.body || false,
        respiraderosM2e1L: req.body || false,
        respiraderosM2e1R: req.body || false,
        respiraderosM2e1A: req.body || false,
        respiraderosM2e2L: req.body || false,
        respiraderosM2e2R: req.body || false,
        respiraderosM2e2A: req.body || false,

        cajaEM1e1L: req.body || false,
        cajaEM1e1R: req.body || false,
        cajaEM1e2L: req.body || false,
        cajaEM1e2R: req.body || false,
        cajaEM2e1L: req.body || false,
        cajaEM2e1R: req.body || false,
        cajaEM2e2L: req.body || false,
        cajaEM2e2R: req.body || false,
        
        cilindrosFM1e1L: req.body || false,
        cilindrosFM1e1R: req.body || false,
        cilindrosFM1e1A: req.body || false,
        cilindrosFM1e2L: req.body || false,
        cilindrosFM1e2R: req.body || false,
        cilindrosFM1e2A: req.body || false,
        cilindrosFRe1L: req.body || false,
        cilindrosFRe1R: req.body || false,
        cilindrosFRe1A: req.body || false,
        cilindrosFRe2L: req.body || false,
        cilindrosFRe2R: req.body || false,
        cilindrosFRe2A: req.body || false,
        cilindrosFM2e1L: req.body || false,
        cilindrosFM2e1R: req.body || false,
        cilindrosFM2e1A: req.body || false,
        cilindrosFM2e2L: req.body || false,
        cilindrosFM2e2R: req.body || false,
        cilindrosFM2e2A: req.body || false,

        chicoteDRe1L: req.body || false,
        chicoteDRe1R: req.body || false,
        chicoteDRe1A: req.body || false,
        chicoteDRe2L: req.body || false,
        chicoteDRe2R: req.body || false,
        chicoteDRe2A: req.body || false,
        
        mangueraAM1e1L: req.body || false,
        mangueraAM1e1R: req.body || false,
        mangueraAM1e1A: req.body || false,
        mangueraAM1e2L: req.body || false,
        mangueraAM1e2R: req.body || false,
        mangueraAM1e2A: req.body || false,
        mangueraARe1L: req.body || false,
        mangueraARe1R: req.body || false,
        mangueraARe1A: req.body || false,
        mangueraARe2L: req.body || false,
        mangueraARe2R: req.body || false,
        mangueraARe2A: req.body || false,
        mangueraAM2e1L: req.body || false,
        mangueraAM2e1R: req.body || false,
        mangueraAM2e1A: req.body || false,
        mangueraAM2e2L: req.body || false,
        mangueraAM2e2R: req.body || false,
        mangueraAM2e2A: req.body || false,

        cableadoFrostM1e1L: req.body || false,
        cableadoFrostM1e1R: req.body || false,
        cableadoFrostM1e1A: req.body || false,
        cableadoFrostM1e2L: req.body || false,
        cableadoFrostM1e2R: req.body || false,
        cableadoFrostM1e2A: req.body || false,
        cableadoFrostRe1L: req.body || false,
        cableadoFrostRe1R: req.body || false,
        cableadoFrostRe1A: req.body || false,
        cableadoFrostRe2L: req.body || false,
        cableadoFrostRe2R: req.body || false,
        cableadoFrostRe2A: req.body || false,
        cableadoFrostM2e1L: req.body || false,
        cableadoFrostM2e1R: req.body || false,
        cableadoFrostM2e1A: req.body || false,
        cableadoFrostM2e2L: req.body || false,
        cableadoFrostM2e2R: req.body || false,
        cableadoFrostM2e2A: req.body || false,

        seguroLM1e1L: req.body || false,
        seguroLM1e1R: req.body || false,
        seguroLM1e1A: req.body || false,
        seguroLM1e2L: req.body || false,
        seguroLM1e2R: req.body || false,
        seguroLM1e2A: req.body || false,
        seguroLRe1L: req.body || false,
        seguroLRe1R: req.body || false,
        seguroLRe1A: req.body || false,
        seguroLRe2L: req.body || false,
        seguroLRe2R: req.body || false,
        seguroLRe2A: req.body || false,
        seguroLM2e1L: req.body || false,
        seguroLM2e1R: req.body || false,
        seguroLM2e1A: req.body || false,
        seguroLM2e2L: req.body || false,
        seguroLM2e2R: req.body || false,
        seguroLM2e2A: req.body || false,

        mangueraSM1e1L: req.body || false,
        mangueraSM1e1R: req.body || false,
        mangueraSM1e1A: req.body || false,
        mangueraSM1e2L: req.body || false,
        mangueraSM1e2R: req.body || false,
        mangueraSM1e2A: req.body || false,
        mangueraSRe1L: req.body || false,
        mangueraSRe1R: req.body || false,
        mangueraSRe1A: req.body || false,
        mangueraSRe2L: req.body || false,
        mangueraSRe2R: req.body || false,
        mangueraSRe2A: req.body || false,
        mangueraSM2e1L: req.body || false,
        mangueraSM2e1R: req.body || false,
        mangueraSM2e1A: req.body || false,
        mangueraSM2e2L: req.body || false,
        mangueraSM2e2R: req.body || false,
        mangueraSM2e2A: req.body || false,

        mangueraIM1e1L: req.body || false,
        mangueraIM1e1R: req.body || false,
        mangueraIM1e1A: req.body || false,
        mangueraIM1e2L: req.body || false,
        mangueraIM1e2R: req.body || false,
        mangueraIM1e2A: req.body || false,
        mangueraIRe1L: req.body || false,
        mangueraIRe1R: req.body || false,
        mangueraIRe1A: req.body || false,
        mangueraIRe2L: req.body || false,
        mangueraIRe2R: req.body || false,
        mangueraIRe2A: req.body || false,
        mangueraIM2e1L: req.body || false,
        mangueraIM2e1R: req.body || false,
        mangueraIM2e1A: req.body || false,
        mangueraIM2e2L: req.body || false,
        mangueraIM2e2R: req.body || false,
        mangueraIM2e2A: req.body || false,

        amortiguadorDM1e1L: req.body || false,
        amortiguadorDM1e1R: req.body || false,
        amortiguadorDM1e1A: req.body || false,
        amortiguadorDM1e2L: req.body || false,
        amortiguadorDM1e2R: req.body || false,
        amortiguadorDM1e2A: req.body || false,
        amortiguadorDRe1L: req.body || false,
        amortiguadorDRe1R: req.body || false,
        amortiguadorDRe1A: req.body || false,
        amortiguadorDRe2L: req.body || false,
        amortiguadorDRe2R: req.body || false,
        amortiguadorDRe2A: req.body || false,
        amortiguadorDM2e1L: req.body || false,
        amortiguadorDM2e1R: req.body || false,
        amortiguadorDM2e1A: req.body || false,
        amortiguadorDM2e2L: req.body || false,
        amortiguadorDM2e2R: req.body || false,
        amortiguadorDM2e2A: req.body || false,

        amortiguadorIM1e1L: req.body || false,
        amortiguadorIM1e1R: req.body || false,
        amortiguadorIM1e1A: req.body || false,
        amortiguadorIM1e2L: req.body || false,
        amortiguadorIM1e2R: req.body || false,
        amortiguadorIM1e2A: req.body || false,
        amortiguadorIRe1L: req.body || false,
        amortiguadorIRe1R: req.body || false,
        amortiguadorIRe1A: req.body || false,
        amortiguadorIRe2L: req.body || false,
        amortiguadorIRe2R: req.body || false,
        amortiguadorIRe2A: req.body || false,
        amortiguadorIM2e1L: req.body || false,
        amortiguadorIM2e1R: req.body || false,
        amortiguadorIM2e1A: req.body || false,
        amortiguadorIM2e2L: req.body || false,
        amortiguadorIM2e2R: req.body || false,
        amortiguadorIM2e2A: req.body || false,

        amortiguadorVM1e1L: req.body || false,
        amortiguadorVM1e1R: req.body || false,
        amortiguadorVM1e1A: req.body || false,
        amortiguadorVM1e2L: req.body || false,
        amortiguadorVM1e2R: req.body || false,
        amortiguadorVM1e2A: req.body || false,
        amortiguadorVRe1L: req.body || false,
        amortiguadorVRe1R: req.body || false,
        amortiguadorVRe1A: req.body || false,
        amortiguadorVRe2L: req.body || false,
        amortiguadorVRe2R: req.body || false,
        amortiguadorVRe2A: req.body || false,
        amortiguadorVM2e1L: req.body || false,
        amortiguadorVM2e1R: req.body || false,
        amortiguadorVM2e1A: req.body || false,
        amortiguadorVM2e2L: req.body || false,
        amortiguadorVM2e2R: req.body || false,
        amortiguadorVM2e2A: req.body || false,

        trenzasCRe1L: req.body || false,
        trenzasCRe1R: req.body || false,
        trenzasCRe1A: req.body || false,
        trenzasCRe2L: req.body || false,
        trenzasCRe2R: req.body || false,
        trenzasCRe2A: req.body || false,
        
        trenzasDM1e1R: req.body || false,
        trenzasDM1e2R: req.body || false,
        trenzasDRe1R: req.body || false,
        trenzasDRe2R: req.body || false,
        trenzasDM2e1R: req.body || false,
        trenzasDM2e2R: req.body || false,
        
        trenzasIM1e1R: req.body || false,
        trenzasIM1e2R: req.body || false,
        trenzasIRe1R: req.body || false,
        trenzasIRe2R: req.body || false,
        trenzasIM2e1R: req.body || false,
        trenzasIM2e2R: req.body || false,
        
        valvulaSM1e1L: req.body || false,
        valvulaSM1e1R: req.body || false,
        valvulaSM1e1A: req.body || false,
        valvulaSRe1L: req.body || false,
        valvulaSRe1R: req.body || false,
        valvulaSRe1A: req.body || false,
        valvulaSM2e1L: req.body || false,
        valvulaSM2e1R: req.body || false,
        valvulaSM2e1A: req.body || false,
        
        valvulaSsM1e1L: req.body || false,
        valvulaSsM1e1R: req.body || false,
        valvulaSsM1e1A: req.body || false,
        valvulaSsM1e2L: req.body || false,
        valvulaSsM1e2R: req.body || false,
        valvulaSsM1e2A: req.body || false,
        valvulaSsRe1L: req.body || false,
        valvulaSsRe1R: req.body || false,
        valvulaSsRe1A: req.body || false,
        valvulaSsM2e1L: req.body || false,
        valvulaSsM2e1R: req.body || false,
        valvulaSsM2e1A: req.body || false,
        valvulaSsM2e2L: req.body || false,
        valvulaSsM2e2R: req.body || false,
        valvulaSsM2e2A: req.body || false,

        tomasRM1e1L: req.body || false,
        tomasRM1e1R: req.body || false,
        tomasRM1e1A: req.body || false,
        tomasRM1e2L: req.body || false,
        tomasRM1e2R: req.body || false,
        tomasRM1e2A: req.body || false,
        tomasRRe1L: req.body || false,
        tomasRRe1R: req.body || false,
        tomasRRe1A: req.body || false,
        tomasRM2e1L: req.body || false,
        tomasRM2e1R: req.body || false,
        tomasRM2e1A: req.body || false,
        tomasRM2e2L: req.body || false,
        tomasRM2e2R: req.body || false,
        tomasRM2e2A: req.body || false,

        amortiguadorHM1e1L: req.body || false,
        amortiguadorHM1e1R: req.body || false,
        amortiguadorHM1e1A: req.body || false,
        amortiguadorHRe1L: req.body || false,
        amortiguadorHRe1R: req.body || false,
        amortiguadorHRe1A: req.body || false,
        amortiguadorHM2e1L: req.body || false,
        amortiguadorHM2e1R: req.body || false,
        amortiguadorHM2e1A: req.body || false,
        
        mangueraBbM1e1L: req.body || false,
        mangueraBbM1e1R: req.body || false,
        mangueraBbM1e1A: req.body || false,
        mangueraBbM2e1L: req.body || false,
        mangueraBbM2e1R: req.body || false,
        mangueraBbM2e1A: req.body || false,

        mangueraBvRe1L: req.body || false,
        mangueraBvRe1R: req.body || false,
        mangueraBvRe1A: req.body || false,
        mangueraBvRe2L: req.body || false,
        mangueraBvRe2R: req.body || false,
        mangueraBvRe2A: req.body || false,

        mangueraFM1e1L: req.body || false,
        mangueraFM1e1R: req.body || false,
        mangueraFM1e1A: req.body || false,
        mangueraFM1e2L: req.body || false,
        mangueraFM1e2R: req.body || false,
        mangueraFM1e2A: req.body || false,
        mangueraFRe1L: req.body || false,
        mangueraFRe1R: req.body || false,
        mangueraFRe1A: req.body || false,
        mangueraFRe2L: req.body || false,
        mangueraFRe2R: req.body || false,
        mangueraFRe2A: req.body || false,
        mangueraFM2e1L: req.body || false,
        mangueraFM2e1R: req.body || false,
        mangueraFM2e1A: req.body || false,
        mangueraFM2e2L: req.body || false,
        mangueraFM2e2R: req.body || false,
        mangueraFM2e2A: req.body || false,

        trenzasBbM1e1L: req.body || false,
        trenzasBbM1e1R: req.body || false,
        trenzasBbM1e1A: req.body || false,
        trenzasBbM1e2L: req.body || false,
        trenzasBbM1e2R: req.body || false,
        trenzasBbM1e2A: req.body || false,
        trenzasBbRe1L: req.body || false,
        trenzasBbRe1R: req.body || false,
        trenzasBbRe1A: req.body || false,
        trenzasBbRe2L: req.body || false,
        trenzasBbRe2R: req.body || false,
        trenzasBbRe2A: req.body || false,
        trenzasBbM2e1L: req.body || false,
        trenzasBbM2e1R: req.body || false,
        trenzasBbM2e1A: req.body || false,
        trenzasBbM2e2L: req.body || false,
        trenzasBbM2e2R: req.body || false,
        trenzasBbM2e2A: req.body || false,

        trenzasBmM1e1L: req.body || false,
        trenzasBmM1e1R: req.body || false,
        trenzasBmM1e1A: req.body || false,
        trenzasBmM1e2L: req.body || false,
        trenzasBmM1e2R: req.body || false,
        trenzasBmM1e2A: req.body || false,
        trenzasBmM2e1L: req.body || false,
        trenzasBmM2e1R: req.body || false,
        trenzasBmM2e1A: req.body || false,
        trenzasBmM2e2L: req.body || false,
        trenzasBmM2e2R: req.body || false,
        trenzasBmM2e2A: req.body || false,

        tuberiaSM1e1L: req.body || false,
        tuberiaSM1e1R: req.body || false,
        tuberiaSM1e1A: req.body || false,
        tuberiaSM1e2L: req.body || false,
        tuberiaSM1e2R: req.body || false,
        tuberiaSM1e2A: req.body || false,
        tuberiaSRe1L: req.body || false,
        tuberiaSRe1R: req.body || false,
        tuberiaSRe1A: req.body || false,
        tuberiaSRe2L: req.body || false,
        tuberiaSRe2R: req.body || false,
        tuberiaSRe2A: req.body || false,
        tuberiaSM2e1L: req.body || false,
        tuberiaSM2e1R: req.body || false,
        tuberiaSM2e1A: req.body || false,
        tuberiaSM2e2L: req.body || false,
        tuberiaSM2e2R: req.body || false,
        tuberiaSM2e2A: req.body || false,

        tuberiaFM1e1L: req.body || false,
        tuberiaFM1e1R: req.body || false,
        tuberiaFM1e1A: req.body || false,
        tuberiaFM1e2L: req.body || false,
        tuberiaFM1e2R: req.body || false,
        tuberiaFM1e2A: req.body || false,
        tuberiaFRe1L: req.body || false,
        tuberiaFRe1R: req.body || false,
        tuberiaFRe1A: req.body || false,
        tuberiaFRe2L: req.body || false,
        tuberiaFRe2R: req.body || false,
        tuberiaFRe2A: req.body || false,
        tuberiaFM2e1L: req.body || false,
        tuberiaFM2e1R: req.body || false,
        tuberiaFM2e1A: req.body || false,
        tuberiaFM2e2L: req.body || false,
        tuberiaFM2e2R: req.body || false,
        tuberiaFM2e2A: req.body || false,

        cableadoMM1e1L: req.body || false,
        cableadoMM1e1R: req.body || false,
        cableadoMM1e1A: req.body || false,
        cableadoMM1e2L: req.body || false,
        cableadoMM1e2R: req.body || false,
        cableadoMM1e2A: req.body || false,
        cableadoMM2e1L: req.body || false,
        cableadoMM2e1R: req.body || false,
        cableadoMM2e1A: req.body || false,
        cableadoMM2e2L: req.body || false,
        cableadoMM2e2R: req.body || false,
        cableadoMM2e2A: req.body || false,

        busquedaFM1: req.body || false,
        busquedaFR: req.body || false,
        busquedaFM2: req.body || false,
            
        observaciones1: req.body.obs1,

        //PARTE2
        frenosEm1LdL: req.body || false,
        frenosEm1LdR: req.body || false,
        frenosEm1LdA: req.body || false,
        frenosEm1LiL: req.body || false,
        frenosEm1LiR: req.body || false,
        frenosEm1LiA: req.body || false,
        frenosErLdL: req.body || false,
        frenosErLdR: req.body || false,
        frenosErLdA: req.body || false,
        frenosErLiL: req.body || false,
        frenosErLiR: req.body || false,
        frenosErLiA: req.body || false,
        frenosEm2LdL: req.body || false,
        frenosEm2LdR: req.body || false,
        frenosEm2LdA: req.body || false,
        frenosEm2LiL: req.body || false,
        frenosEm2LiR: req.body || false,
        frenosEm2LiA: req.body || false,

        cableadoFm1LdL: req.body || false,
        cableadoFm1LdR: req.body || false,
        cableadoFm1LdA: req.body || false,
        cableadoFm1LiL: req.body || false,
        cableadoFm1LiR: req.body || false,
        cableadoFm1LiA: req.body || false,
        cableadoFrLdL: req.body || false,
        cableadoFrLdR: req.body || false,
        cableadoFrLdA: req.body || false,
        cableadoFrLiL: req.body || false,
        cableadoFrLiR: req.body || false,
        cableadoFrLiA: req.body || false,
        cableadoFm2LdL: req.body || false,
        cableadoFm2LdR: req.body || false,
        cableadoFm2LdA: req.body || false,
        cableadoFm2LiL: req.body || false,
        cableadoFm2LiR: req.body || false,
        cableadoFm2LiA: req.body || false,

        trenzasFm1LdL: req.body || false,
        trenzasFm1LdR: req.body || false,
        trenzasFm1LdA: req.body || false,
        trenzasFm1LiL: req.body || false,
        trenzasFm1LiR: req.body || false,
        trenzasFm1LiA: req.body || false,
        trenzasFrLdL: req.body || false,
        trenzasFrLdR: req.body || false,
        trenzasFrLdA: req.body || false,
        trenzasFrLiL: req.body || false,
        trenzasFrLiR: req.body || false,
        trenzasFrLiA: req.body || false,
        trenzasFm2LdL: req.body || false,
        trenzasFm2LdR: req.body || false,
        trenzasFm2LdA: req.body || false,
        trenzasFm2LiL: req.body || false,
        trenzasFm2LiR: req.body || false,
        trenzasFm2LiA: req.body || false,

        //REVISION DE TORQUES Y ELEMENTOS DE FIJACION
        tornilloCm1e1: req.body || false,
        tornilloCm1e2: req.body || false,
        tornilloCm2e1: req.body || false,
        tornilloCm2e2: req.body || false,
        observacionesTc: req.body || '',

        respiraderosm1e1: req.body || false,
        respiraderosm1e2: req.body || false,
        respiraderosm2e1: req.body || false,
        respiraderosm2e2: req.body || false,
        observacionesR: req.body || '',

        //REVISION DE LAS BALATAS EN MILIMETROS
        pastaSupIntM1Ld: req.body || false,
        pastaSupIntM1Li: req.body || false,
        pastaSupIntRLd: req.body || false,
        pastaSupIntRLi: req.body || false,
        pastaSupIntM2Ld: req.body || false,
        pastaSupIntM2Li: req.body || false,

        pastaInfIntM1Ld: req.body || false,
        pastaInfIntM1Li: req.body || false,
        pastaInfIntRLd: req.body || false,
        pastaInfIntRLi: req.body || false,
        pastaInfIntM2Ld: req.body || false,
        pastaInfIntM2Li: req.body || false,

        pastaSupExtM1Ld: req.body || false,
        pastaSupExtM1Li: req.body || false,
        pastaSupExtRLd: req.body || false,
        pastaSupExtRLi: req.body || false,
        pastaSupExtM2Ld: req.body || false,
        pastaSupExtM2Li: req.body || false,

        pastaInfExtM1Ld: req.body || false,
        pastaInfExtM1Li: req.body || false,
        pastaInfExtRLd: req.body || false,
        pastaInfExtRLi: req.body || false,
        pastaInfExtM2Ld: req.body || false,
        pastaInfExtM2Li: req.body || false,

        observaciones2: req.body.obs2,

        materialUtilizado: materiales,
    };
    await mmmeB02.findByIdAndUpdate(id, { $set: MMME_B02}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_B02.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeB02.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_B02.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeB02.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_B02.getAllMaintenenceMMME_B02 = async (req, res) => {
    const maintenances = await mmmeB02.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_B02.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_B02New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeB02.findByIdAndUpdate(id, { $set: historyMMME_B02New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_B02.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeB02.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_B02.createMaintenenceMMME_B02 = async (req, res) => {
    const maintenence = new mmmeB02(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_B02;