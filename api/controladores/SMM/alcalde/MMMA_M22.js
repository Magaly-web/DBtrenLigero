'use strict'

var mmmaM22 = require('../../../models/SMM/mayor/MMMA_M22');

const MMMA_M22 = {};

MMMA_M22.getMMMA_M22Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM22.findById(id)
    res.json(maintenance)
};
MMMA_M22.editMMMA_M22Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M22 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM22.findByIdAndUpdate(id, { $set: MMMA_M22}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M22.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM22.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M22.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM22.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M22.getAllMaintenenceMMMA_M22 = async (req, res) => {
    const maintenances = await mmmaM22.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M22.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M22New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM22.findByIdAndUpdate(id, { $set: historyMMMA_M22New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M22.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM22.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M22.createMaintenenceMMMA_M22 = async (req, res) => {
    const maintenence = new mmmaM22(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M22;