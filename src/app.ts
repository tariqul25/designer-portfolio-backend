import express, { type Application, type Request, type Response } from "express"
import cors from "cors";
import { userRoutes } from "./app/module/user/user.route.js";
import { reviewRoutes } from "./app/module/review/review.route.js";
import { purchaseRoutes } from "./app/module/purchase/purchase.route.js";
import { pricingRoutes } from "./app/module/pricing/pricing.route.js";
import { designRoutes } from "./app/module/design/design.route.js";
import { categoryRoutes } from "./app/module/category/category.route.js";
const app: Application = express()

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/designs", designRoutes);
app.use("/api/categories", categoryRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

export default app;