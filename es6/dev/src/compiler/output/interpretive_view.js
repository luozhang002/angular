import { isPresent } from 'angular2/src/facade/lang';
import { AppView } from 'angular2/src/core/linker/view';
import { BaseException } from 'angular2/src/facade/exceptions';
export class InterpretiveAppViewInstanceFactory {
    createInstance(superClass, clazz, args, props, getters, methods) {
        if (superClass === AppView) {
            return new _InterpretiveAppView(args, props, getters, methods);
        }
        throw new BaseException(`Can't instantiate class ${superClass} in interpretative mode`);
    }
}
class _InterpretiveAppView extends AppView {
    constructor(args, props, getters, methods) {
        super(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
        this.props = props;
        this.getters = getters;
        this.methods = methods;
    }
    createInternal(rootSelector) {
        var m = this.methods.get('createInternal');
        if (isPresent(m)) {
            return m(rootSelector);
        }
        else {
            return super.createInternal(rootSelector);
        }
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
        var m = this.methods.get('injectorGetInternal');
        if (isPresent(m)) {
            return m(token, nodeIndex, notFoundResult);
        }
        else {
            return super.injectorGet(token, nodeIndex, notFoundResult);
        }
    }
    destroyInternal() {
        var m = this.methods.get('destroyInternal');
        if (isPresent(m)) {
            return m();
        }
        else {
            return super.destroyInternal();
        }
    }
    dirtyParentQueriesInternal() {
        var m = this.methods.get('dirtyParentQueriesInternal');
        if (isPresent(m)) {
            return m();
        }
        else {
            return super.dirtyParentQueriesInternal();
        }
    }
    detectChangesInternal(throwOnChange) {
        var m = this.methods.get('detectChangesInternal');
        if (isPresent(m)) {
            return m(throwOnChange);
        }
        else {
            return super.detectChangesInternal(throwOnChange);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwcmV0aXZlX3ZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLW1sSEVYWmE2LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvb3V0cHV0L2ludGVycHJldGl2ZV92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO09BQzNDLEVBQUMsT0FBTyxFQUFDLE1BQU0sK0JBQStCO09BRTlDLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRzVEO0lBQ0UsY0FBYyxDQUFDLFVBQWUsRUFBRSxLQUFVLEVBQUUsSUFBVyxFQUFFLEtBQXVCLEVBQ2pFLE9BQThCLEVBQUUsT0FBOEI7UUFDM0UsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELE1BQU0sSUFBSSxhQUFhLENBQUMsMkJBQTJCLFVBQVUseUJBQXlCLENBQUMsQ0FBQztJQUMxRixDQUFDO0FBQ0gsQ0FBQztBQUVELG1DQUFtQyxPQUFPO0lBQ3hDLFlBQVksSUFBVyxFQUFTLEtBQXVCLEVBQVMsT0FBOEIsRUFDM0UsT0FBOEI7UUFDL0MsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRnpELFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDM0UsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7SUFFakQsQ0FBQztJQUNELGNBQWMsQ0FBQyxZQUEwQjtRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNELG1CQUFtQixDQUFDLEtBQVUsRUFBRSxTQUFpQixFQUFFLGNBQW1CO1FBQ3BFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUNELDBCQUEwQjtRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBQ0QscUJBQXFCLENBQUMsYUFBc0I7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtBcHBWaWV3fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlldyc7XG5pbXBvcnQge0FwcEVsZW1lbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50JztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7SW5zdGFuY2VGYWN0b3J5LCBEeW5hbWljSW5zdGFuY2V9IGZyb20gJy4vb3V0cHV0X2ludGVycHJldGVyJztcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGl2ZUFwcFZpZXdJbnN0YW5jZUZhY3RvcnkgaW1wbGVtZW50cyBJbnN0YW5jZUZhY3Rvcnkge1xuICBjcmVhdGVJbnN0YW5jZShzdXBlckNsYXNzOiBhbnksIGNsYXp6OiBhbnksIGFyZ3M6IGFueVtdLCBwcm9wczogTWFwPHN0cmluZywgYW55PixcbiAgICAgICAgICAgICAgICAgZ2V0dGVyczogTWFwPHN0cmluZywgRnVuY3Rpb24+LCBtZXRob2RzOiBNYXA8c3RyaW5nLCBGdW5jdGlvbj4pOiBhbnkge1xuICAgIGlmIChzdXBlckNsYXNzID09PSBBcHBWaWV3KSB7XG4gICAgICByZXR1cm4gbmV3IF9JbnRlcnByZXRpdmVBcHBWaWV3KGFyZ3MsIHByb3BzLCBnZXR0ZXJzLCBtZXRob2RzKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYENhbid0IGluc3RhbnRpYXRlIGNsYXNzICR7c3VwZXJDbGFzc30gaW4gaW50ZXJwcmV0YXRpdmUgbW9kZWApO1xuICB9XG59XG5cbmNsYXNzIF9JbnRlcnByZXRpdmVBcHBWaWV3IGV4dGVuZHMgQXBwVmlldzxhbnk+IGltcGxlbWVudHMgRHluYW1pY0luc3RhbmNlIHtcbiAgY29uc3RydWN0b3IoYXJnczogYW55W10sIHB1YmxpYyBwcm9wczogTWFwPHN0cmluZywgYW55PiwgcHVibGljIGdldHRlcnM6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPixcbiAgICAgICAgICAgICAgcHVibGljIG1ldGhvZHM6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPikge1xuICAgIHN1cGVyKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0sIGFyZ3NbN10sIGFyZ3NbOF0pO1xuICB9XG4gIGNyZWF0ZUludGVybmFsKHJvb3RTZWxlY3Rvcjogc3RyaW5nIHwgYW55KTogQXBwRWxlbWVudCB7XG4gICAgdmFyIG0gPSB0aGlzLm1ldGhvZHMuZ2V0KCdjcmVhdGVJbnRlcm5hbCcpO1xuICAgIGlmIChpc1ByZXNlbnQobSkpIHtcbiAgICAgIHJldHVybiBtKHJvb3RTZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVJbnRlcm5hbChyb290U2VsZWN0b3IpO1xuICAgIH1cbiAgfVxuICBpbmplY3RvckdldEludGVybmFsKHRva2VuOiBhbnksIG5vZGVJbmRleDogbnVtYmVyLCBub3RGb3VuZFJlc3VsdDogYW55KTogYW55IHtcbiAgICB2YXIgbSA9IHRoaXMubWV0aG9kcy5nZXQoJ2luamVjdG9yR2V0SW50ZXJuYWwnKTtcbiAgICBpZiAoaXNQcmVzZW50KG0pKSB7XG4gICAgICByZXR1cm4gbSh0b2tlbiwgbm9kZUluZGV4LCBub3RGb3VuZFJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5pbmplY3RvckdldCh0b2tlbiwgbm9kZUluZGV4LCBub3RGb3VuZFJlc3VsdCk7XG4gICAgfVxuICB9XG4gIGRlc3Ryb3lJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICB2YXIgbSA9IHRoaXMubWV0aG9kcy5nZXQoJ2Rlc3Ryb3lJbnRlcm5hbCcpO1xuICAgIGlmIChpc1ByZXNlbnQobSkpIHtcbiAgICAgIHJldHVybiBtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5kZXN0cm95SW50ZXJuYWwoKTtcbiAgICB9XG4gIH1cbiAgZGlydHlQYXJlbnRRdWVyaWVzSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgdmFyIG0gPSB0aGlzLm1ldGhvZHMuZ2V0KCdkaXJ0eVBhcmVudFF1ZXJpZXNJbnRlcm5hbCcpO1xuICAgIGlmIChpc1ByZXNlbnQobSkpIHtcbiAgICAgIHJldHVybiBtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5kaXJ0eVBhcmVudFF1ZXJpZXNJbnRlcm5hbCgpO1xuICAgIH1cbiAgfVxuICBkZXRlY3RDaGFuZ2VzSW50ZXJuYWwodGhyb3dPbkNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHZhciBtID0gdGhpcy5tZXRob2RzLmdldCgnZGV0ZWN0Q2hhbmdlc0ludGVybmFsJyk7XG4gICAgaWYgKGlzUHJlc2VudChtKSkge1xuICAgICAgcmV0dXJuIG0odGhyb3dPbkNoYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5kZXRlY3RDaGFuZ2VzSW50ZXJuYWwodGhyb3dPbkNoYW5nZSk7XG4gICAgfVxuICB9XG59XG4iXX0=