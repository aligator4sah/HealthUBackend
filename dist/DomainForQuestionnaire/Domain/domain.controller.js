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
const create_Domain_dto_1 = require("./DTO/create-Domain.dto");
const domain_service_1 = require("./domain.service");
const swagger_1 = require("@nestjs/swagger");
let DomainController = class DomainController {
    constructor(domainService) {
        this.domainService = domainService;
    }
    getAllDomain() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.domainService.getAllDomain();
            return msg;
        });
    }
    getDomainById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.domainService.getDomainById(params.id);
            return msg;
        });
    }
    addDomain(domain) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.domainService.addDomain(domain);
            return msg;
        });
    }
    updateDomain(params, newDomain) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.domainService.updateDomain(params.id, newDomain);
            return msg;
        });
    }
    deleteDomain(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.domainService.deleteDomain(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DomainController.prototype, "getAllDomain", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DomainController.prototype, "getDomainById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Domain_dto_1.CreateDomainDto]),
    __metadata("design:returntype", Promise)
], DomainController.prototype, "addDomain", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_Domain_dto_1.CreateDomainDto]),
    __metadata("design:returntype", Promise)
], DomainController.prototype, "updateDomain", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DomainController.prototype, "deleteDomain", null);
DomainController = __decorate([
    common_1.Controller('domain'),
    swagger_1.ApiUseTags('HealthU'),
    __metadata("design:paramtypes", [domain_service_1.DomainService])
], DomainController);
exports.DomainController = DomainController;
//# sourceMappingURL=domain.controller.js.map