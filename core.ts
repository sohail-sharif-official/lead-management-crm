type Actor={tenant:string,role:'admin'|'agent',id:string};type Lead={id:string,name:string,assignee:string|null,activity:string[]};
export class CRM {
 private leads=new Map<string,Map<string,Lead>>();
 private scoped(a:Actor){if(!a.tenant||!a.id)throw Error('identity');if(!this.leads.has(a.tenant))this.leads.set(a.tenant,new Map());return this.leads.get(a.tenant)!}
 private admin(a:Actor){if(a.role!=='admin')throw Error('forbidden')}
 create(a:Actor,id:string,name:string){this.admin(a);const store=this.scoped(a);if(!id||!name||store.has(id))throw Error('invalid or duplicate lead');store.set(id,{id,name,assignee:null,activity:['created by '+a.id]})}
 assign(a:Actor,id:string,agent:string){this.admin(a);if(!agent)throw Error('agent');const l=this.scoped(a).get(id);if(!l)throw Error('not found');l.assignee=agent;l.activity.push('assigned to '+agent+' by '+a.id)}
 search(a:Actor,q:string){return [...this.scoped(a).values()].filter(l=>(a.role==='admin'||l.assignee===a.id)&&l.name.toLowerCase().includes(q.toLowerCase())).map(l=>({...l,activity:[...l.activity]}))}
}
