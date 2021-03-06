"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let UserDemographicService = class UserDemographicService {
    constructor(userDemographicRepository) {
        this.userDemographicRepository = userDemographicRepository;
    }
    getAllUserDemographics() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDemographicRepository.find();
        });
    }
    getUserDemographicById(userDemographicId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDemographicRepository.findOne({ where: { id: userDemographicId } });
        });
    }
    addUserDemographic(userDemographic) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDemographicRepository.save(userDemographic);
        });
    }
    updateUserDemographic(userDemographicId, newUserDemographic) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUserDemographic = yield this.userDemographicRepository.findOne({ where: { id: userDemographicId } });
            if (selectedUserDemographic) {
                yield this.userDemographicRepository.update(userDemographicId, newUserDemographic);
                return yield this.userDemographicRepository.findOne({ where: { id: userDemographicId } });
            }
            else {
                return null;
            }
        });
    }
    deleteUserDemographic(userDemographicId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedUserDemographic = yield this.userDemographicRepository.findOne({ where: { id: userDemographicId } });
            if (selectedUserDemographic) {
                yield this.userDemographicRepository.delete(userDemographicId);
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
};
UserDemographicService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('UserDemographicRepository')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserDemographicService);
exports.UserDemographicService = UserDemographicService;
//# sourceMappingURL=userDemographic.service.js.map