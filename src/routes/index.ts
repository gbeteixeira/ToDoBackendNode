import { Router } from "express";

//middlewares
import { TaskValidation } from '../middlewares/TaskValidation'

//controllers
import { TaskController } from "../controllers/TaskController";
import { TaskUpdateController } from "../controllers/TaskUpdateController";
import { TaskListController } from "../controllers/TaskListController";
import { TaskShowController } from "../controllers/TaskShowController";
import { TaskDeleteController } from "../controllers/TaskDeleteController";
import { TaskDoneController } from "../controllers/TaskDoneController";
import { TaskLateController } from "../controllers/TaskLateController";
import { TaskTodayController } from "../controllers/TaskTodayController";
import { TaskWeekController } from "../controllers/TaskWeekController";
import { TaskMonthController } from "../controllers/TaskMonthController";
import { TaskYearController } from "../controllers/TaskYearController";

const router = Router();

const taskController = new TaskController();
const updateTaskController = new TaskUpdateController();
const listTaskController = new TaskListController();
const showTaskController = new TaskShowController();
const deleteTaskController = new TaskDeleteController();
const doneTaskController = new TaskDoneController();
const lateTaskController = new TaskLateController();
const todayTaskController = new TaskTodayController();
const weekTaskController = new TaskWeekController();
const monthTaskController = new TaskMonthController();
const yearTaskController = new TaskYearController();

router.post("/task", TaskValidation, taskController.create);
router.put("/task/:id", TaskValidation, updateTaskController.update);
router.delete("/task/:id", deleteTaskController.delete);
router.put("/task/:id/:done", doneTaskController.done);

router.get("/task/:id", showTaskController.show);

router.get("/task/filter/all/:macaddress", listTaskController.list);
router.get("/task/filter/late/:macaddress", lateTaskController.late);
router.get("/task/filter/today/:macaddress", todayTaskController.today);
router.get("/task/filter/week/:macaddress", weekTaskController.week);
router.get("/task/filter/month/:macaddress", monthTaskController.month);
router.get("/task/filter/year/:macaddress", yearTaskController.year);


// export  
export { router };  