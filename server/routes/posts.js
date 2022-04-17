import express from 'express';

import { getPosts, craetePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.get("/", craetePost);

export default router;