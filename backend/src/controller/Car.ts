import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import {
    queryListCars,
    queryFindCarById,
    queryAddCar,
    queryUpdateCar,
    queryDeleteCar,
} from "../service/Car";

// Types
import Car from "../@types/Car";

export const getAllCars = (req: Request, res: Response) => {
    const cars: Car[] = queryListCars();
    res.status(200).json(cars);
};

export const getCarById = (req: Request, res: Response) => {
    const foundCar = queryFindCarById(req.params.id);

    if (!foundCar) {
        res.status(404).json({ msg: "Car not found" });
    }

    res.status(200).json(foundCar);
};

export const addCar = (req: Request, res: Response) => {
    const { name, year, color, price } = req.body;

    if (!name) {
        res.status(400).json({ msg: "Name is required" });
    }

    if (!year) {
        res.status(400).json({ msg: "Year is required" });
    }

    if (!color) {
        res.status(400).json({ msg: "Color is required" });
    }

    if (!price) {
        res.status(400).json({ msg: "Price is required" });
    }

    const newCar = queryAddCar({
        id: uuidv4(),
        name,
        year,
        color,
        price,
    });

    res.json(newCar);
};

export const updateCar = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, year, color, price } = req.body;

    if (!name) {
        res.status(400).json({ msg: "Name is required" });
    }

    if (!year) {
        res.status(400).json({ msg: "Year is required" });
    }

    if (!color) {
        res.status(400).json({ msg: "Color is required" });
    }

    if (!price) {
        res.status(400).json({ msg: "Price is required" });
    }

    const updatedCar = queryUpdateCar({
        id,
        name,
        year,
        color,
        price,
    });

    res.status(200).json(updatedCar);
};

export const deleteCar = (req: Request, res: Response) => {
    const { id } = req.params;

    queryDeleteCar(id);

    res.status(200).json({ msg: "Car deleted" });
};
