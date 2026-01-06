//const express = require('express');
import express from 'express';

//const restHandler = require('./response-handler');
import { restHandler } from './response-handler.js';

const app = express();

app.get('/', restHandler);

app.listen(3000);
