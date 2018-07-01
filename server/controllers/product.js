'use strict';
import {requestHelper,Response} from '../helpers/index';
const uri = 'http://5b128005d50a5c0014ef11ef.mockapi.io/api/v1/product';
export default class ProductController {
    getAll = async (req, res) => {
        try{
            const data = await requestHelper.executeRequest(uri, 'GET', null);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e);
        }
    };
    getOne = async (req, res) => {
        let id = req.params.id;
        try{
            const data = await requestHelper.executeRequest(uri+`/${id}`, 'GET', null);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e);
        }
    };

    create = async (req, res) => {
        let id = req.params.id;
        let data = req.body;
        try{
            const data = await requestHelper.executeRequest(uri, 'POST', data);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e)
        }
    };

	update = async (req, res) => {
        let id = req.params.id;
        let data = req.body;
        try{
            const data = await requestHelper.executeRequest(uri+`/${id}`, 'PUT', data);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e)
        }
    };
	delete = async (req, res) => {
        let id = req.params.id;
        try{
            const data = await requestHelper.executeRequest(uri+`/${id}`, 'DELETE', null);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e)
        }
    };

}