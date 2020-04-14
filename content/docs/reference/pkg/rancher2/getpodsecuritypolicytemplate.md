
---
title: "GetPodSecurityPolicyTemplate"
block_external_search_index: true
---



Use this data source to retrieve information about a Rancher v2 PodSecurityPolicyTemplate.

## Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as rancher2 from "@pulumi/rancher2";

const foo = pulumi.output(rancher2.getPodSecurityPolicyTemplate({
    name: "foo",
}, { async: true }));
```

> This content is derived from https://github.com/terraform-providers/terraform-provider-rancher2/blob/master/website/docs/d/podSecurityPolicyTemplate.html.markdown.





## Using GetPodSecurityPolicyTemplate

{{< chooser language "javascript,typescript,python,go,csharp" / >}}


{{% choosable language typescript %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>getPodSecurityPolicyTemplate<span class="p">(</span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/rancher2/#GetPodSecurityPolicyTemplateArgs">GetPodSecurityPolicyTemplateArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/rancher2/#GetPodSecurityPolicyTemplateResult">GetPodSecurityPolicyTemplateResult</a></span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">function </span> get_pod_security_policy_template(</span>allow_privilege_escalation=None<span class="p">, </span>allowed_capabilities=None<span class="p">, </span>allowed_csi_drivers=None<span class="p">, </span>allowed_flex_volumes=None<span class="p">, </span>allowed_host_paths=None<span class="p">, </span>allowed_proc_mount_types=None<span class="p">, </span>allowed_unsafe_sysctls=None<span class="p">, </span>annotations=None<span class="p">, </span>default_add_capabilities=None<span class="p">, </span>default_allow_privilege_escalation=None<span class="p">, </span>description=None<span class="p">, </span>forbidden_sysctls=None<span class="p">, </span>fs_group=None<span class="p">, </span>host_ipc=None<span class="p">, </span>host_network=None<span class="p">, </span>host_pid=None<span class="p">, </span>host_ports=None<span class="p">, </span>labels=None<span class="p">, </span>name=None<span class="p">, </span>privileged=None<span class="p">, </span>read_only_root_filesystem=None<span class="p">, </span>required_drop_capabilities=None<span class="p">, </span>run_as_group=None<span class="p">, </span>run_as_user=None<span class="p">, </span>runtime_class=None<span class="p">, </span>se_linux=None<span class="p">, </span>supplemental_group=None<span class="p">, </span>volumes=None<span class="p">, </span>opts=None<span class="p">)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>LookupPodSecurityPolicyTemplate<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateArgs">GetPodSecurityPolicyTemplateArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#InvokeOption">InvokeOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#LookupPodSecurityPolicyTemplateResult">LookupPodSecurityPolicyTemplateResult</a></span>, error)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">GetPodSecurityPolicyTemplate </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Rancher2/Pulumi.Rancher2.GetPodSecurityPolicyTemplateResult.html">GetPodSecurityPolicyTemplateResult</a></span>> <span class="p">InvokeAsync(</span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Rancher2/Pulumi.Rancher2.GetPodSecurityPolicyTemplateArgs.html">GetPodSecurityPolicyTemplateArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span>? <span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}



The following arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Csi<wbr>Drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Flex<wbr>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Host<wbr>Paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Proc<wbr>Mount<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Unsafe<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary<string, object>?</span>
    </dt>
    <dd>{{% md %}}Annotations for PodSecurityPolicyTemplate object (map)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Default<wbr>Add<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Default<wbr>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The PodSecurityPolicyTemplate description (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Forbidden<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Fs<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary<string, object>?</span>
    </dt>
    <dd>{{% md %}}Labels for PodSecurityPolicyTemplate object (map)
* `allow_privilege_escalation` = (Optional)
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Read<wbr>Only<wbr>Root<wbr>Filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Required<wbr>Drop<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Run<wbr>As<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Run<wbr>As<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Runtime<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Se<wbr>Linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Supplemental<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Csi<wbr>Drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Flex<wbr>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Host<wbr>Paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Proc<wbr>Mount<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allowed<wbr>Unsafe<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}Annotations for PodSecurityPolicyTemplate object (map)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Default<wbr>Add<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Default<wbr>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}The PodSecurityPolicyTemplate description (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Forbidden<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Fs<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}Labels for PodSecurityPolicyTemplate object (map)
* `allow_privilege_escalation` = (Optional)
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Read<wbr>Only<wbr>Root<wbr>Filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Required<wbr>Drop<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Run<wbr>As<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Run<wbr>As<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Runtime<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Se<wbr>Linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Supplemental<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed<wbr>Csi<wbr>Drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver[]?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed<wbr>Flex<wbr>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume[]?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed<wbr>Host<wbr>Paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path[]?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed<wbr>Proc<wbr>Mount<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed<wbr>Unsafe<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}?</span>
    </dt>
    <dd>{{% md %}}Annotations for PodSecurityPolicyTemplate object (map)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>default<wbr>Add<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>default<wbr>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The PodSecurityPolicyTemplate description (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>forbidden<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>fs<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>Ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>Pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port[]?</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}?</span>
    </dt>
    <dd>{{% md %}}Labels for PodSecurityPolicyTemplate object (map)
* `allow_privilege_escalation` = (Optional)
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>read<wbr>Only<wbr>Root<wbr>Filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>required<wbr>Drop<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>run<wbr>As<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>run<wbr>As<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>runtime<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>se<wbr>Linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>supplemental<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group?</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>allow_<wbr>privilege_<wbr>escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed_<wbr>capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed_<wbr>csi_<wbr>drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver]</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed_<wbr>flex_<wbr>volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume]</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed_<wbr>host_<wbr>paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path]</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed_<wbr>proc_<wbr>mount_<wbr>types</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allowed_<wbr>unsafe_<wbr>sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}Annotations for PodSecurityPolicyTemplate object (map)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>default_<wbr>add_<wbr>capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>default_<wbr>allow_<wbr>privilege_<wbr>escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The PodSecurityPolicyTemplate description (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>forbidden_<wbr>sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>fs_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>network</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port]</a></span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}Labels for PodSecurityPolicyTemplate object (map)
* `allow_privilege_escalation` = (Optional)
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>read_<wbr>only_<wbr>root_<wbr>filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}(bool)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>required_<wbr>drop_<wbr>capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>run_<wbr>as_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>run_<wbr>as_<wbr>user</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User]</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>runtime_<wbr>class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class]</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>se_<wbr>linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux]</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>supplemental_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}(list maxitems:1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}(list)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## GetPodSecurityPolicyTemplate Result

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Csi<wbr>Drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver&gt;?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Flex<wbr>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume&gt;?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Host<wbr>Paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path&gt;?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Proc<wbr>Mount<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Unsafe<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary<string, object></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Default<wbr>Add<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Default<wbr>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Forbidden<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Fs<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary<string, object></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Read<wbr>Only<wbr>Root<wbr>Filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Required<wbr>Drop<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Run<wbr>As<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Run<wbr>As<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Runtime<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Se<wbr>Linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Supplemental<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Csi<wbr>Drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Flex<wbr>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Host<wbr>Paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Proc<wbr>Mount<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Allowed<wbr>Unsafe<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Default<wbr>Add<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Default<wbr>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Forbidden<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Fs<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Host<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Read<wbr>Only<wbr>Root<wbr>Filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Required<wbr>Drop<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Run<wbr>As<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Run<wbr>As<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Runtime<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Se<wbr>Linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Supplemental<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed<wbr>Csi<wbr>Drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver[]?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed<wbr>Flex<wbr>Volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume[]?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed<wbr>Host<wbr>Paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path[]?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed<wbr>Proc<wbr>Mount<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed<wbr>Unsafe<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>default<wbr>Add<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>default<wbr>Allow<wbr>Privilege<wbr>Escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>forbidden<wbr>Sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>fs<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host<wbr>Ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host<wbr>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host<wbr>Pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>read<wbr>Only<wbr>Root<wbr>Filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>required<wbr>Drop<wbr>Capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>run<wbr>As<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>run<wbr>As<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>runtime<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>se<wbr>Linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>supplemental<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>allow_<wbr>privilege_<wbr>escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed_<wbr>capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed_<wbr>csi_<wbr>drivers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedcsidriver">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed_<wbr>flex_<wbr>volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedflexvolume">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed_<wbr>host_<wbr>paths</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateallowedhostpath">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed_<wbr>proc_<wbr>mount_<wbr>types</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>allowed_<wbr>unsafe_<wbr>sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>annotations</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>default_<wbr>add_<wbr>capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>default_<wbr>allow_<wbr>privilege_<wbr>escalation</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>forbidden_<wbr>sysctls</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>fs_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgroup">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host_<wbr>ipc</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host_<wbr>network</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host_<wbr>pid</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>host_<wbr>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatehostport">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>privileged</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>read_<wbr>only_<wbr>root_<wbr>filesystem</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>required_<wbr>drop_<wbr>capabilities</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>run_<wbr>as_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgroup">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>run_<wbr>as_<wbr>user</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuser">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>runtime_<wbr>class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateruntimeclass">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>se_<wbr>linux</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinux">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>supplemental_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgroup">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>volumes</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Supporting Types

<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Csi<wbr>Driver</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateAllowedCsiDriver">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateAllowedCsiDriver">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateAllowedCsiDriverArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateAllowedCsiDriver">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The name of the PodSecurityPolicyTemplate (string)
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Flex<wbr>Volume</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateAllowedFlexVolume">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateAllowedFlexVolume">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateAllowedFlexVolumeArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateAllowedFlexVolume">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Driver</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Driver</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>driver</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>driver</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Allowed<wbr>Host<wbr>Path</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateAllowedHostPath">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateAllowedHostPath">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateAllowedHostPathArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateAllowedHostPath">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Path<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Read<wbr>Only</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Path<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Read<wbr>Only</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>path<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>read<wbr>Only</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>path<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>read<wbr>Only</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateFsGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateFsGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateFsGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateFsGroup">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgrouprange">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group<wbr>Range<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgrouprange">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group<wbr>Range</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgrouprange">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group<wbr>Range[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatefsgrouprange">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group<wbr>Range]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Fs<wbr>Group<wbr>Range</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateFsGroupRange">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateFsGroupRange">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateFsGroupRangeArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateFsGroupRange">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Host<wbr>Port</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateHostPort">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateHostPort">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateHostPortArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateHostPort">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateRunAsGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateRunAsGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsGroup">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgrouprange">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group<wbr>Range<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgrouprange">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group<wbr>Range</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgrouprange">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group<wbr>Range[]?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasgrouprange">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group<wbr>Range]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>Group<wbr>Range</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateRunAsGroupRange">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateRunAsGroupRange">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsGroupRangeArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsGroupRange">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateRunAsUser">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateRunAsUser">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsUserArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsUser">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuserrange">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User<wbr>Range<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuserrange">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User<wbr>Range</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuserrange">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User<wbr>Range[]?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplaterunasuserrange">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User<wbr>Range]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Run<wbr>As<wbr>User<wbr>Range</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateRunAsUserRange">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateRunAsUserRange">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsUserRangeArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRunAsUserRange">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Runtime<wbr>Class</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateRuntimeClass">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateRuntimeClass">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRuntimeClassArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateRuntimeClass">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Allowed<wbr>Runtime<wbr>Class<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Default<wbr>Runtime<wbr>Class<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Allowed<wbr>Runtime<wbr>Class<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Default<wbr>Runtime<wbr>Class<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>allowed<wbr>Runtime<wbr>Class<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>default<wbr>Runtime<wbr>Class<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>allowed<wbr>Runtime<wbr>Class<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>default<wbr>Runtime<wbr>Class<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateSeLinux">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateSeLinux">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSeLinuxArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSeLinux">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Se<wbr>Linux<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinuxselinuxoption">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux<wbr>Se<wbr>Linux<wbr>Option<wbr>Args?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Se<wbr>Linux<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinuxselinuxoption">*Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux<wbr>Se<wbr>Linux<wbr>Option</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>se<wbr>Linux<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinuxselinuxoption">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux<wbr>Se<wbr>Linux<wbr>Option?</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>se<wbr>Linux<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplateselinuxselinuxoption">Dict[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux<wbr>Se<wbr>Linux<wbr>Option]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Se<wbr>Linux<wbr>Se<wbr>Linux<wbr>Option</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateSeLinuxSeLinuxOption">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateSeLinuxSeLinuxOption">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSeLinuxSeLinuxOptionArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSeLinuxSeLinuxOption">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>level</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>role</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>level</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>role</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateSupplementalGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateSupplementalGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSupplementalGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSupplementalGroup">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgrouprange">List&lt;Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group<wbr>Range<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgrouprange">[]Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group<wbr>Range</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgrouprange">Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group<wbr>Range[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>ranges</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getpodsecuritypolicytemplatesupplementalgrouprange">List[Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group<wbr>Range]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rule</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Pod<wbr>Security<wbr>Policy<wbr>Template<wbr>Supplemental<wbr>Group<wbr>Range</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/input/#GetPodSecurityPolicyTemplateSupplementalGroupRange">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/rancher2/types/output/#GetPodSecurityPolicyTemplateSupplementalGroupRange">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSupplementalGroupRangeArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-rancher2/sdk/go/rancher2/?tab=doc#GetPodSecurityPolicyTemplateSupplementalGroupRange">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Max</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Min</span>
        <span class="property-indicator"></span>
        <span class="property-type">int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">number</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>max</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>min</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}






