import { Component } from './trendmicrocomponent';

export class SummaryDto {
    id: string;
    name: string;
    type: number;
    scan_mode: number;
    aa: boolean;
    status: number;
    ip_addr: string;
    mac_addr: string;
    sched_scan_time: number;
    manual_scan_time: number;
    sched_start_time: number;
    sched_complete_time: number;
    manual_start_time: string;
    manual_complete_time: string;
    manual_aggressive_start_time: number;
    manual_aggressive_complete_time: number;
    platform: string;
    legacy_tag: string;
    arch: string;
    components: Component[];
    version: string;
    ss_service: boolean;
    pop3_scan: boolean;
    virus_detected: number;
    spyware_detected: number;
    spam_detected: number;
    urlfilter_violated: number;
    isolate_status: number;
    phone_number: string;
    last_logon_user_guid: string;
    last_logon_user_account: string;
    last_logon_user_domain: string;
    created_at: number;
    last_connect_time: string;
    online: boolean;
}