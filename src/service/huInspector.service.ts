import { HUInspectorRepository } from "@/repository/huInspector.repository";

export class HUInspectorService {
    static async analyzeHU(huContent: string) {
        return await HUInspectorRepository.analyzeHURun(huContent);
    }
}