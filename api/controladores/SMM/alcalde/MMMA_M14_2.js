'use strict'

var mmmaM14_2 = require('../../../models/SMM/mayor/MMMA_M14_2');

const MMMA_M14_2 = {};

MMMA_M14_2.getMMMA_M14_2Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM14_2.findById(id)
    res.json(maintenance)
};
MMMA_M14_2.editMMMA_M14_2Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M14_2 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        //DESMONTAJE
        marcarPosicionVentanaM1VLizq1: req.body || false,
        marcarPosicionVentanaM1VLizq2: req.body || false,
        marcarPosicionVentanaM1VLder1: req.body || false,
        marcarPosicionVentanaM1VLder2: req.body || false,
        marcarPosicionVentanaM1VCizq1: req.body || false,
        marcarPosicionVentanaM1VCizq2: req.body || false,
        marcarPosicionVentanaM1VCder1: req.body || false,
        marcarPosicionVentanaM1VCder2: req.body || false,
        marcarPosicionVentanaM2VLizq1: req.body || false,
        marcarPosicionVentanaM2VLizq2: req.body || false,
        marcarPosicionVentanaM2VLder1: req.body || false,
        marcarPosicionVentanaM2VLder2: req.body || false,
        marcarPosicionVentanaM2VCizq1: req.body || false,
        marcarPosicionVentanaM2VCizq2: req.body || false,
        marcarPosicionVentanaM2VCder1: req.body || false,
        marcarPosicionVentanaM2VCder2: req.body || false,
        observacionesMpv: req.body || '',

        retirarElementosFijacionM1VLizq1: req.body || false,
        retirarElementosFijacionM1VLizq2: req.body || false,
        retirarElementosFijacionM1VLder1: req.body || false,
        retirarElementosFijacionM1VLder2: req.body || false,
        retirarElementosFijacionM1VCizq1: req.body || false,
        retirarElementosFijacionM1VCizq2: req.body || false,
        retirarElementosFijacionM1VCder1: req.body || false,
        retirarElementosFijacionM1VCder2: req.body || false,
        retirarElementosFijacionM2VLizq1: req.body || false,
        retirarElementosFijacionM2VLizq2: req.body || false,
        retirarElementosFijacionM2VLder1: req.body || false,
        retirarElementosFijacionM2VLder2: req.body || false,
        retirarElementosFijacionM2VCizq1: req.body || false,
        retirarElementosFijacionM2VCizq2: req.body || false,
        retirarElementosFijacionM2VCder1: req.body || false,
        retirarElementosFijacionM2VCder2: req.body || false,
        observacionesRef: req.body || '',

        retirarMarcoInternoM1VLizq1: req.body || false,
        retirarMarcoInternoM1VLizq2: req.body || false,
        retirarMarcoInternoM1VLder1: req.body || false,
        retirarMarcoInternoM1VLder2: req.body || false,
        retirarMarcoInternoM1VCizq1: req.body || false,
        retirarMarcoInternoM1VCizq2: req.body || false,
        retirarMarcoInternoM1VCder1: req.body || false,
        retirarMarcoInternoM1VCder2: req.body || false,
        retirarMarcoInternoM2VLizq1: req.body || false,
        retirarMarcoInternoM2VLizq2: req.body || false,
        retirarMarcoInternoM2VLder1: req.body || false,
        retirarMarcoInternoM2VLder2: req.body || false,
        retirarMarcoInternoM2VCizq1: req.body || false,
        retirarMarcoInternoM2VCizq2: req.body || false,
        retirarMarcoInternoM2VCder1: req.body || false,
        retirarMarcoInternoM2VCder2: req.body || false,
        observacionesRmi: req.body || '',

        desmontarVentanaM1VLizq1: req.body || false,
        desmontarVentanaM1VLizq2: req.body || false,
        desmontarVentanaM1VLder1: req.body || false,
        desmontarVentanaM1VLder2: req.body || false,
        desmontarVentanaM1VCizq1: req.body || false,
        desmontarVentanaM1VCizq2: req.body || false,
        desmontarVentanaM1VCder1: req.body || false,
        desmontarVentanaM1VCder2: req.body || false,
        desmontarVentanaM2VLizq1: req.body || false,
        desmontarVentanaM2VLizq2: req.body || false,
        desmontarVentanaM2VLder1: req.body || false,
        desmontarVentanaM2VLder2: req.body || false,
        desmontarVentanaM2VCizq1: req.body || false,
        desmontarVentanaM2VCizq2: req.body || false,
        desmontarVentanaM2VCder1: req.body || false,
        desmontarVentanaM2VCder2: req.body || false,
        observacionesDv: req.body || '',

        ensamblarVentanaM1VLizq1: req.body || false,
        ensamblarVentanaM1VLizq2: req.body || false,
        ensamblarVentanaM1VLder1: req.body || false,
        ensamblarVentanaM1VLder2: req.body || false,
        ensamblarVentanaM1VCizq1: req.body || false,
        ensamblarVentanaM1VCizq2: req.body || false,
        ensamblarVentanaM1VCder1: req.body || false,
        ensamblarVentanaM1VCder2: req.body || false,
        ensamblarVentanaM2VLizq1: req.body || false,
        ensamblarVentanaM2VLizq2: req.body || false,
        ensamblarVentanaM2VLder1: req.body || false,
        ensamblarVentanaM2VLder2: req.body || false,
        ensamblarVentanaM2VCizq1: req.body || false,
        ensamblarVentanaM2VCizq2: req.body || false,
        ensamblarVentanaM2VCder1: req.body || false,
        ensamblarVentanaM2VCder2: req.body || false,
        observacionesEv: req.body || '',

        //TRABAJOS EN BANCO
        limpiezaGeneralM1VLizq1: req.body || false,
        limpiezaGeneralM1VLizq2: req.body || false,
        limpiezaGeneralM1VLder1: req.body || false,
        limpiezaGeneralM1VLder2: req.body || false,
        limpiezaGeneralM1VCizq1: req.body || false,
        limpiezaGeneralM1VCizq2: req.body || false,
        limpiezaGeneralM1VCder1: req.body || false,
        limpiezaGeneralM1VCder2: req.body || false,
        limpiezaGeneralM2VLizq1: req.body || false,
        limpiezaGeneralM2VLizq2: req.body || false,
        limpiezaGeneralM2VLder1: req.body || false,
        limpiezaGeneralM2VLder2: req.body || false,
        limpiezaGeneralM2VCizq1: req.body || false,
        limpiezaGeneralM2VCizq2: req.body || false,
        limpiezaGeneralM2VCder1: req.body || false,
        limpiezaGeneralM2VCder2: req.body || false,
        observacionesLg: req.body || '',

        revisionMarcoVM1VLizq1: req.body || false,
        revisionMarcoVM1VLizq2: req.body || false,
        revisionMarcoVM1VLder1: req.body || false,
        revisionMarcoVM1VLder2: req.body || false,
        revisionMarcoVM1VCizq1: req.body || false,
        revisionMarcoVM1VCizq2: req.body || false,
        revisionMarcoVM1VCder1: req.body || false,
        revisionMarcoVM1VCder2: req.body || false,
        revisionMarcoVM2VLizq1: req.body || false,
        revisionMarcoVM2VLizq2: req.body || false,
        revisionMarcoVM2VLder1: req.body || false,
        revisionMarcoVM2VLder2: req.body || false,
        revisionMarcoVM2VCizq1: req.body || false,
        revisionMarcoVM2VCizq2: req.body || false,
        revisionMarcoVM2VCder1: req.body || false,
        revisionMarcoVM2VCder2: req.body || false,
        observacionesRmv: req.body || '',

        revisionMarcoAM1VLizq1: req.body || false,
        revisionMarcoAM1VLizq2: req.body || false,
        revisionMarcoAM1VLder1: req.body || false,
        revisionMarcoAM1VLder2: req.body || false,
        revisionMarcoAM1VCizq1: req.body || false,
        revisionMarcoAM1VCizq2: req.body || false,
        revisionMarcoAM1VCder1: req.body || false,
        revisionMarcoAM1VCder2: req.body || false,
        revisionMarcoAM2VLizq1: req.body || false,
        revisionMarcoAM2VLizq2: req.body || false,
        revisionMarcoAM2VLder1: req.body || false,
        revisionMarcoAM2VLder2: req.body || false,
        revisionMarcoAM2VCizq1: req.body || false,
        revisionMarcoAM2VCizq2: req.body || false,
        revisionMarcoAM2VCder1: req.body || false,
        revisionMarcoAM2VCder2: req.body || false,
        observacionesRma: req.body || '',

        revisionElastomerosM1VLizq1: req.body || false,
        revisionElastomerosM1VLizq2: req.body || false,
        revisionElastomerosM1VLder1: req.body || false,
        revisionElastomerosM1VLder2: req.body || false,
        revisionElastomerosM1VCizq1: req.body || false,
        revisionElastomerosM1VCizq2: req.body || false,
        revisionElastomerosM1VCder1: req.body || false,
        revisionElastomerosM1VCder2: req.body || false,
        revisionElastomerosM2VLizq1: req.body || false,
        revisionElastomerosM2VLizq2: req.body || false,
        revisionElastomerosM2VLder1: req.body || false,
        revisionElastomerosM2VLder2: req.body || false,
        revisionElastomerosM2VCizq1: req.body || false,
        revisionElastomerosM2VCizq2: req.body || false,
        revisionElastomerosM2VCder1: req.body || false,
        revisionElastomerosM2VCder2: req.body || false,
        observacionesRe: req.body || '',

        revisionCristalVM1VLizq1: req.body || false,
        revisionCristalVM1VLizq2: req.body || false,
        revisionCristalVM1VLder1: req.body || false,
        revisionCristalVM1VLder2: req.body || false,
        revisionCristalVM1VCizq1: req.body || false,
        revisionCristalVM1VCizq2: req.body || false,
        revisionCristalVM1VCder1: req.body || false,
        revisionCristalVM1VCder2: req.body || false,
        revisionCristalVM2VLizq1: req.body || false,
        revisionCristalVM2VLizq2: req.body || false,
        revisionCristalVM2VLder1: req.body || false,
        revisionCristalVM2VLder2: req.body || false,
        revisionCristalVM2VCizq1: req.body || false,
        revisionCristalVM2VCizq2: req.body || false,
        revisionCristalVM2VCder1: req.body || false,
        revisionCristalVM2VCder2: req.body || false,
        observacionesRcv: req.body || '',

        revisarCristalAM1VLizq1: req.body || false,
        revisarCristalAM1VLizq2: req.body || false,
        revisarCristalAM1VLder1: req.body || false,
        revisarCristalAM1VLder2: req.body || false,
        revisarCristalAM1VCizq1: req.body || false,
        revisarCristalAM1VCizq2: req.body || false,
        revisarCristalAM1VCder1: req.body || false,
        revisarCristalAM1VCder2: req.body || false,
        revisarCristalAM2VLizq1: req.body || false,
        revisarCristalAM2VLizq2: req.body || false,
        revisarCristalAM2VLder1: req.body || false,
        revisarCristalAM2VLder2: req.body || false,
        revisarCristalAM2VCizq1: req.body || false,
        revisarCristalAM2VCizq2: req.body || false,
        revisarCristalAM2VCder1: req.body || false,
        revisarCristalAM2VCder2: req.body || false,
        observacionesRca: req.body || '',

        revisionSeguroAM1VLizq1: req.body || false,
        revisionSeguroAM1VLizq2: req.body || false,
        revisionSeguroAM1VLder1: req.body || false,
        revisionSeguroAM1VLder2: req.body || false,
        revisionSeguroAM1VCizq1: req.body || false,
        revisionSeguroAM1VCizq2: req.body || false,
        revisionSeguroAM1VCder1: req.body || false,
        revisionSeguroAM1VCder2: req.body || false,
        revisionSeguroAM2VLizq1: req.body || false,
        revisionSeguroAM2VLizq2: req.body || false,
        revisionSeguroAM2VLder1: req.body || false,
        revisionSeguroAM2VLder2: req.body || false,
        revisionSeguroAM2VCizq1: req.body || false,
        revisionSeguroAM2VCizq2: req.body || false,
        revisionSeguroAM2VCder1: req.body || false,
        revisionSeguroAM2VCder2: req.body || false,
        observacionesRsa: req.body || '',

        revisionJaladeraM1VLizq1: req.body || false,
        revisionJaladeraM1VLizq2: req.body || false,
        revisionJaladeraM1VLder1: req.body || false,
        revisionJaladeraM1VLder2: req.body || false,
        revisionJaladeraM1VCizq1: req.body || false,
        revisionJaladeraM1VCizq2: req.body || false,
        revisionJaladeraM1VCder1: req.body || false,
        revisionJaladeraM1VCder2: req.body || false,
        revisionJaladeraM2VLizq1: req.body || false,
        revisionJaladeraM2VLizq2: req.body || false,
        revisionJaladeraM2VLder1: req.body || false,
        revisionJaladeraM2VLder2: req.body || false,
        revisionJaladeraM2VCizq1: req.body || false,
        revisionJaladeraM2VCizq2: req.body || false,
        revisionJaladeraM2VCder1: req.body || false,
        revisionJaladeraM2VCder2: req.body || false,
        observacionesRj: req.body || '',

        revisionMarcoIM1VLizq1: req.body || false,
        revisionMarcoIM1VLizq2: req.body || false,
        revisionMarcoIM1VLder1: req.body || false,
        revisionMarcoIM1VLder2: req.body || false,
        revisionMarcoIM1VCizq1: req.body || false,
        revisionMarcoIM1VCizq2: req.body || false,
        revisionMarcoIM1VCder1: req.body || false,
        revisionMarcoIM1VCder2: req.body || false,
        revisionMarcoIM2VLizq1: req.body || false,
        revisionMarcoIM2VLizq2: req.body || false,
        revisionMarcoIM2VLder1: req.body || false,
        revisionMarcoIM2VLder2: req.body || false,
        revisionMarcoIM2VCizq1: req.body || false,
        revisionMarcoIM2VCizq2: req.body || false,
        revisionMarcoIM2VCder1: req.body || false,
        revisionMarcoIM2VCder2: req.body || false,
        observacionesRm: req.body || '',

        extraccionPijasM1VLizq1: req.body || false,
        extraccionPijasM1VLizq2: req.body || false,
        extraccionPijasM1VLder1: req.body || false,
        extraccionPijasM1VLder2: req.body || false,
        extraccionPijasM1VCizq1: req.body || false,
        extraccionPijasM1VCizq2: req.body || false,
        extraccionPijasM1VCder1: req.body || false,
        extraccionPijasM1VCder2: req.body || false,
        extraccionPijasM2VLizq1: req.body || false,
        extraccionPijasM2VLizq2: req.body || false,
        extraccionPijasM2VLder1: req.body || false,
        extraccionPijasM2VLder2: req.body || false,
        extraccionPijasM2VCizq1: req.body || false,
        extraccionPijasM2VCizq2: req.body || false,
        extraccionPijasM2VCder1: req.body || false,
        extraccionPijasM2VCder2: req.body || false,
        observacionesEp: req.body || '',

        revisionAmortiguadoresM1VLizq1: req.body || false,
        revisionAmortiguadoresM1VLizq2: req.body || false,
        revisionAmortiguadoresM1VLder1: req.body || false,
        revisionAmortiguadoresM1VLder2: req.body || false,
        revisionAmortiguadoresM1VCizq1: req.body || false,
        revisionAmortiguadoresM1VCizq2: req.body || false,
        revisionAmortiguadoresM1VCder1: req.body || false,
        revisionAmortiguadoresM1VCder2: req.body || false,
        revisionAmortiguadoresM2VLizq1: req.body || false,
        revisionAmortiguadoresM2VLizq2: req.body || false,
        revisionAmortiguadoresM2VLder1: req.body || false,
        revisionAmortiguadoresM2VLder2: req.body || false,
        revisionAmortiguadoresM2VCizq1: req.body || false,
        revisionAmortiguadoresM2VCizq2: req.body || false,
        revisionAmortiguadoresM2VCder1: req.body || false,
        revisionAmortiguadoresM2VCder2: req.body || false,
        observacionesRa: req.body || '',

        cambioCristalVM1VLizq1: req.body || false,
        cambioCristalVM1VLizq2: req.body || false,
        cambioCristalVM1VLder1: req.body || false,
        cambioCristalVM1VLder2: req.body || false,
        cambioCristalVM1VCizq1: req.body || false,
        cambioCristalVM1VCizq2: req.body || false,
        cambioCristalVM1VCder1: req.body || false,
        cambioCristalVM1VCder2: req.body || false,
        cambioCristalVM2VLizq1: req.body || false,
        cambioCristalVM2VLizq2: req.body || false,
        cambioCristalVM2VLder1: req.body || false,
        cambioCristalVM2VLder2: req.body || false,
        cambioCristalVM2VCizq1: req.body || false,
        cambioCristalVM2VCizq2: req.body || false,
        cambioCristalVM2VCder1: req.body || false,
        cambioCristalVM2VCder2: req.body || false,
        observacionesCcv: req.body || '',

        cambioCristalAM1VLizq1: req.body || false,
        cambioCristalAM1VLizq2: req.body || false,
        cambioCristalAM1VLder1: req.body || false,
        cambioCristalAM1VLder2: req.body || false,
        cambioCristalAM1VCizq1: req.body || false,
        cambioCristalAM1VCizq2: req.body || false,
        cambioCristalAM1VCder1: req.body || false,
        cambioCristalAM1VCder2: req.body || false,
        cambioCristalAM2VLizq1: req.body || false,
        cambioCristalAM2VLizq2: req.body || false,
        cambioCristalAM2VLder1: req.body || false,
        cambioCristalAM2VLder2: req.body || false,
        cambioCristalAM2VCizq1: req.body || false,
        cambioCristalAM2VCizq2: req.body || false,
        cambioCristalAM2VCder1: req.body || false,
        cambioCristalAM2VCder2: req.body || false,
        observacionesCca: req.body || '',

        aplicarSiliconCM1VLizq1: req.body || false,
        aplicarSiliconCM1VLizq2: req.body || false,
        aplicarSiliconCM1VLder1: req.body || false,
        aplicarSiliconCM1VLder2: req.body || false,
        aplicarSiliconCM1VCizq1: req.body || false,
        aplicarSiliconCM1VCizq2: req.body || false,
        aplicarSiliconCM1VCder1: req.body || false,
        aplicarSiliconCM1VCder2: req.body || false,
        aplicarSiliconCM2VLizq1: req.body || false,
        aplicarSiliconCM2VLizq2: req.body || false,
        aplicarSiliconCM2VLder1: req.body || false,
        aplicarSiliconCM2VLder2: req.body || false,
        aplicarSiliconCM2VCizq1: req.body || false,
        aplicarSiliconCM2VCizq2: req.body || false,
        aplicarSiliconCM2VCder1: req.body || false,
        aplicarSiliconCM2VCder2: req.body || false,
        observacionesAsc: req.body || '',

        sellarSiliconM1VLizq1: req.body || false,
        sellarSiliconM1VLizq2: req.body || false,
        sellarSiliconM1VLder1: req.body || false,
        sellarSiliconM1VLder2: req.body || false,
        sellarSiliconM1VCizq1: req.body || false,
        sellarSiliconM1VCizq2: req.body || false,
        sellarSiliconM1VCder1: req.body || false,
        sellarSiliconM1VCder2: req.body || false,
        sellarSiliconM2VLizq1: req.body || false,
        sellarSiliconM2VLizq2: req.body || false,
        sellarSiliconM2VLder1: req.body || false,
        sellarSiliconM2VLder2: req.body || false,
        sellarSiliconM2VCizq1: req.body || false,
        sellarSiliconM2VCizq2: req.body || false,
        sellarSiliconM2VCder1: req.body || false,
        sellarSiliconM2VCder2: req.body || false,
        observacionesSs: req.body || '',

        asentarPinturaNM1VLizq1: req.body || false,
        asentarPinturaNM1VLizq2: req.body || false,
        asentarPinturaNM1VLder1: req.body || false,
        asentarPinturaNM1VLder2: req.body || false,
        asentarPinturaNM1VCizq1: req.body || false,
        asentarPinturaNM1VCizq2: req.body || false,
        asentarPinturaNM1VCder1: req.body || false,
        asentarPinturaNM1VCder2: req.body || false,
        asentarPinturaNM2VLizq1: req.body || false,
        asentarPinturaNM2VLizq2: req.body || false,
        asentarPinturaNM2VLder1: req.body || false,
        asentarPinturaNM2VLder2: req.body || false,
        asentarPinturaNM2VCizq1: req.body || false,
        asentarPinturaNM2VCizq2: req.body || false,
        asentarPinturaNM2VCder1: req.body || false,
        asentarPinturaNM2VCder2: req.body || false,
        observacionesApn: req.body || '',

        prepararVentanaM1VLizq1: req.body || false,
        prepararVentanaM1VLizq2: req.body || false,
        prepararVentanaM1VLder1: req.body || false,
        prepararVentanaM1VLder2: req.body || false,
        prepararVentanaM1VCizq1: req.body || false,
        prepararVentanaM1VCizq2: req.body || false,
        prepararVentanaM1VCder1: req.body || false,
        prepararVentanaM1VCder2: req.body || false,
        prepararVentanaM2VLizq1: req.body || false,
        prepararVentanaM2VLizq2: req.body || false,
        prepararVentanaM2VLder1: req.body || false,
        prepararVentanaM2VLder2: req.body || false,
        prepararVentanaM2VCizq1: req.body || false,
        prepararVentanaM2VCizq2: req.body || false,
        prepararVentanaM2VCder1: req.body || false,
        prepararVentanaM2VCder2: req.body || false,
        observacionesPv: req.body || '',

        aplicarPinturaM1VLizq1: req.body || false,
        aplicarPinturaM1VLizq2: req.body || false,
        aplicarPinturaM1VLder1: req.body || false,
        aplicarPinturaM1VLder2: req.body || false,
        aplicarPinturaM1VCizq1: req.body || false,
        aplicarPinturaM1VCizq2: req.body || false,
        aplicarPinturaM1VCder1: req.body || false,
        aplicarPinturaM1VCder2: req.body || false,
        aplicarPinturaM2VLizq1: req.body || false,
        aplicarPinturaM2VLizq2: req.body || false,
        aplicarPinturaM2VLder1: req.body || false,
        aplicarPinturaM2VLder2: req.body || false,
        aplicarPinturaM2VCizq1: req.body || false,
        aplicarPinturaM2VCizq2: req.body || false,
        aplicarPinturaM2VCder1: req.body || false,
        aplicarPinturaM2VCder2: req.body || false,
        observacionesAp: req.body || '',

        ubicarVentanaM1VLizq1: req.body || false,
        ubicarVentanaM1VLizq2: req.body || false,
        ubicarVentanaM1VLder1: req.body || false,
        ubicarVentanaM1VLder2: req.body || false,
        ubicarVentanaM1VCizq1: req.body || false,
        ubicarVentanaM1VCizq2: req.body || false,
        ubicarVentanaM1VCder1: req.body || false,
        ubicarVentanaM1VCder2: req.body || false,
        ubicarVentanaM2VLizq1: req.body || false,
        ubicarVentanaM2VLizq2: req.body || false,
        ubicarVentanaM2VLder1: req.body || false,
        ubicarVentanaM2VLder2: req.body || false,
        ubicarVentanaM2VCizq1: req.body || false,
        ubicarVentanaM2VCizq2: req.body || false,
        ubicarVentanaM2VCder1: req.body || false,
        ubicarVentanaM2VCder2: req.body || false,
        observacionesUv: req.body || '',

        separarVentanaM1VLizq1: req.body || false,
        separarVentanaM1VLizq2: req.body || false,
        separarVentanaM1VLder1: req.body || false,
        separarVentanaM1VLder2: req.body || false,
        separarVentanaM1VCizq1: req.body || false,
        separarVentanaM1VCizq2: req.body || false,
        separarVentanaM1VCder1: req.body || false,
        separarVentanaM1VCder2: req.body || false,
        separarVentanaM2VLizq1: req.body || false,
        separarVentanaM2VLizq2: req.body || false,
        separarVentanaM2VLder1: req.body || false,
        separarVentanaM2VLder2: req.body || false,
        separarVentanaM2VCizq1: req.body || false,
        separarVentanaM2VCizq2: req.body || false,
        separarVentanaM2VCder1: req.body || false,
        separarVentanaM2VCder2: req.body || false,
        observacionesSv: req.body || '',

        aplicarSiliconM1VLizq1: req.body || false,
        aplicarSiliconM1VLizq2: req.body || false,
        aplicarSiliconM1VLder1: req.body || false,
        aplicarSiliconM1VLder2: req.body || false,
        aplicarSiliconM1VCizq1: req.body || false,
        aplicarSiliconM1VCizq2: req.body || false,
        aplicarSiliconM1VCder1: req.body || false,
        aplicarSiliconM1VCder2: req.body || false,
        aplicarSiliconM2VLizq1: req.body || false,
        aplicarSiliconM2VLizq2: req.body || false,
        aplicarSiliconM2VLder1: req.body || false,
        aplicarSiliconM2VLder2: req.body || false,
        aplicarSiliconM2VCizq1: req.body || false,
        aplicarSiliconM2VCizq2: req.body || false,
        aplicarSiliconM2VCder1: req.body || false,
        aplicarSiliconM2VCder2: req.body || false,
        observacionesAs: req.body || '',

        montarVentanaM1VLizq1: req.body || false,
        montarVentanaM1VLizq2: req.body || false,
        montarVentanaM1VLder1: req.body || false,
        montarVentanaM1VLder2: req.body || false,
        montarVentanaM1VCizq1: req.body || false,
        montarVentanaM1VCizq2: req.body || false,
        montarVentanaM1VCder1: req.body || false,
        montarVentanaM1VCder2: req.body || false,
        montarVentanaM2VLizq1: req.body || false,
        montarVentanaM2VLizq2: req.body || false,
        montarVentanaM2VLder1: req.body || false,
        montarVentanaM2VLder2: req.body || false,
        montarVentanaM2VCizq1: req.body || false,
        montarVentanaM2VCizq2: req.body || false,
        montarVentanaM2VCder1: req.body || false,
        montarVentanaM2VCder2: req.body || false,
        observacionesMv: req.body || '',

        colocarMarcoIM1VLizq1: req.body || false,
        colocarMarcoIM1VLizq2: req.body || false,
        colocarMarcoIM1VLder1: req.body || false,
        colocarMarcoIM1VLder2: req.body || false,
        colocarMarcoIM1VCizq1: req.body || false,
        colocarMarcoIM1VCizq2: req.body || false,
        colocarMarcoIM1VCder1: req.body || false,
        colocarMarcoIM1VCder2: req.body || false,
        colocarMarcoIM2VLizq1: req.body || false,
        colocarMarcoIM2VLizq2: req.body || false,
        colocarMarcoIM2VLder1: req.body || false,
        colocarMarcoIM2VLder2: req.body || false,
        colocarMarcoIM2VCizq1: req.body || false,
        colocarMarcoIM2VCizq2: req.body || false,
        colocarMarcoIM2VCder1: req.body || false,
        colocarMarcoIM2VCder2: req.body || false,
        observacionesCmi: req.body || '',

        colocarPijasM1VLizq1: req.body || false,
        colocarPijasM1VLizq2: req.body || false,
        colocarPijasM1VLder1: req.body || false,
        colocarPijasM1VLder2: req.body || false,
        colocarPijasM1VCizq1: req.body || false,
        colocarPijasM1VCizq2: req.body || false,
        colocarPijasM1VCder1: req.body || false,
        colocarPijasM1VCder2: req.body || false,
        colocarPijasM2VLizq1: req.body || false,
        colocarPijasM2VLizq2: req.body || false,
        colocarPijasM2VLder1: req.body || false,
        colocarPijasM2VLder2: req.body || false,
        colocarPijasM2VCizq1: req.body || false,
        colocarPijasM2VCizq2: req.body || false,
        colocarPijasM2VCder1: req.body || false,
        colocarPijasM2VCder2: req.body || false,
        observacionesCp: req.body || '',

        revisarFuncionamientoM1VLizq1: req.body || false,
        revisarFuncionamientoM1VLizq2: req.body || false,
        revisarFuncionamientoM1VLder1: req.body || false,
        revisarFuncionamientoM1VLder2: req.body || false,
        revisarFuncionamientoM1VCizq1: req.body || false,
        revisarFuncionamientoM1VCizq2: req.body || false,
        revisarFuncionamientoM1VCder1: req.body || false,
        revisarFuncionamientoM1VCder2: req.body || false,
        revisarFuncionamientoM2VLizq1: req.body || false,
        revisarFuncionamientoM2VLizq2: req.body || false,
        revisarFuncionamientoM2VLder1: req.body || false,
        revisarFuncionamientoM2VLder2: req.body || false,
        revisarFuncionamientoM2VCizq1: req.body || false,
        revisarFuncionamientoM2VCizq2: req.body || false,
        revisarFuncionamientoM2VCder1: req.body || false,
        revisarFuncionamientoM2VCder2: req.body || false,
        observacionesRf: req.body || '',

        pulirCristalM1VLizq1: req.body || false,
        pulirCristalM1VLizq2: req.body || false,
        pulirCristalM1VLder1: req.body || false,
        pulirCristalM1VLder2: req.body || false,
        pulirCristalM1VCizq1: req.body || false,
        pulirCristalM1VCizq2: req.body || false,
        pulirCristalM1VCder1: req.body || false,
        pulirCristalM1VCder2: req.body || false,
        pulirCristalM2VLizq1: req.body || false,
        pulirCristalM2VLizq2: req.body || false,
        pulirCristalM2VLder1: req.body || false,
        pulirCristalM2VLder2: req.body || false,
        pulirCristalM2VCizq1: req.body || false,
        pulirCristalM2VCizq2: req.body || false,
        pulirCristalM2VCder1: req.body || false,
        pulirCristalM2VCder2: req.body || false,
        observacionesPc: req.body || '',

        retirarExcesoSM1VLizq1: req.body || false,
        retirarExcesoSM1VLizq2: req.body || false,
        retirarExcesoSM1VLder1: req.body || false,
        retirarExcesoSM1VLder2: req.body || false,
        retirarExcesoSM1VCizq1: req.body || false,
        retirarExcesoSM1VCizq2: req.body || false,
        retirarExcesoSM1VCder1: req.body || false,
        retirarExcesoSM1VCder2: req.body || false,
        retirarExcesoSM2VLizq1: req.body || false,
        retirarExcesoSM2VLizq2: req.body || false,
        retirarExcesoSM2VLder1: req.body || false,
        retirarExcesoSM2VLder2: req.body || false,
        retirarExcesoSM2VCizq1: req.body || false,
        retirarExcesoSM2VCizq2: req.body || false,
        retirarExcesoSM2VCder1: req.body || false,
        retirarExcesoSM2VCder2: req.body || false,
        observacionesRes: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM14_2.findByIdAndUpdate(id, { $set: MMMA_M14_2}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M14_2.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM14_2.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M14_2.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM14_2.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M14_2.getAllMaintenenceMMMA_M14_2 = async (req, res) => {
    const maintenances = await mmmaM14_2.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M14_2.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M14_2New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM14_2.findByIdAndUpdate(id, { $set: historyMMMA_M14_2New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M14_2.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM14_2.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M14_2.createMaintenenceMMMA_M14_2 = async (req, res) => {
    const maintenence = new mmmaM14_2(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M14_2;