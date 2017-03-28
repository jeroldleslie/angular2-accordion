import { async, TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { DataService } from './data.service';
import { MockBackend } from '@angular/http/testing';

describe('DataService', () => {
    const mockData = [{
        "build_id": "432461",
        "owner": "sami",
        "timestamp": "8/17/2016 12:05 AM",
        "state": "running",
        "type": "firewall",
        "result": "none",
        "result_detail": "none",
        "metrics": {
            "process_completed": 67,
            "test": {
                "value": 78,
                "state": "raising"
            },
            "maintainability": {
                "value": 45,
                "state": "raising"
            },
            "security": {
                "value": 29,
                "state": "falling"
            },
            "workmanship": {
                "value": 89,
                "state": "raising"
            }
        },
        "build": {
            "process_completed": 76,
            "timestamp": "8/17/2016 01:05 AM"
        },
        "unit_test": {
            "process_completed": 60,
            "pass": 150,
            "failed": 55,
            "code_covered": 78
        },
        "functional_test": {
            "process_completed": 76,
            "pass": 67,
            "failed": 20,
            "code_covered": 65
        }
    }];

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                DataService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend, options) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [
                HttpModule
            ]
        });
    });



    it('should ...', inject([DataService, MockBackend], (service: DataService, mockBackend: MockBackend) => {
        expect(service).toBeTruthy();
    }));

    it('should get datas using staticQuery method', async(inject(
        [DataService, MockBackend], (service, mockBackend) => {
            mockBackend.connections.subscribe(conn => {

                conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockData) })));
            });
            const result = service.staticQuery();
            result.subscribe(res => {
                expect(res).toEqual(mockData);
            });
        })));
});
