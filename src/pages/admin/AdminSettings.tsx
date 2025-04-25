
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { toast } from 'sonner';
import { 
  Bell, 
  Mail, 
  Shield, 
  Users, 
  Lock, 
  Layers, 
  Database, 
  Save
} from 'lucide-react';

const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Code Festival Admin Panel',
    siteDescription: 'Administrative dashboard for the Code Festival competition',
    contactEmail: 'admin@codefestival.org',
    enableRegistration: true,
    maintenanceMode: false,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    teamUpdates: true,
    gameStartAlerts: true,
    systemAlerts: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: 90,
    sessionTimeout: 30,
    enforceStrongPasswords: true,
  });

  const handleGeneralSettingChange = (key: string, value: any) => {
    setGeneralSettings({ ...generalSettings, [key]: value });
  };

  const handleNotificationSettingChange = (key: string, value: boolean) => {
    setNotificationSettings({ ...notificationSettings, [key]: value });
  };

  const handleSecuritySettingChange = (key: string, value: any) => {
    setSecuritySettings({ ...securitySettings, [key]: value });
  };

  const handleSaveSettings = (tab: string) => {
    toast.success(`${tab} settings saved successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure the admin panel and competition settings
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4 w-full sm:w-[400px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2 h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>
                Configure the basic settings for your admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={generalSettings.siteName}
                    onChange={(e) => 
                      handleGeneralSettingChange('siteName', e.target.value)
                    }
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Input
                    id="siteDescription"
                    value={generalSettings.siteDescription}
                    onChange={(e) =>
                      handleGeneralSettingChange('siteDescription', e.target.value)
                    }
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={generalSettings.contactEmail}
                    onChange={(e) =>
                      handleGeneralSettingChange('contactEmail', e.target.value)
                    }
                  />
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <div>
                    <Label htmlFor="theme" className="font-medium mb-1 block">
                      Theme
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle between light and dark mode
                    </p>
                  </div>
                  <ThemeToggle />
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="registrations" className="font-medium">
                      Enable Registrations
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Allow new teams to register for competitions
                    </p>
                  </div>
                  <Switch
                    id="registrations"
                    checked={generalSettings.enableRegistration}
                    onCheckedChange={(checked) =>
                      handleGeneralSettingChange('enableRegistration', checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance" className="font-medium">
                      Maintenance Mode
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Put the site in maintenance mode
                    </p>
                  </div>
                  <Switch
                    id="maintenance"
                    checked={generalSettings.maintenanceMode}
                    onCheckedChange={(checked) =>
                      handleGeneralSettingChange('maintenanceMode', checked)
                    }
                  />
                </div>
              </div>

              <Button className="mt-6 w-full sm:w-auto" onClick={() => handleSaveSettings('General')}>
                <Save className="mr-2 h-4 w-4" />
                Save General Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure how and when notifications are sent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailNotifications" className="font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Send notifications via email
                    </p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) =>
                      handleNotificationSettingChange('emailNotifications', checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="pushNotifications" className="font-medium">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Send browser push notifications
                    </p>
                  </div>
                  <Switch
                    id="pushNotifications"
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) =>
                      handleNotificationSettingChange('pushNotifications', checked)
                    }
                  />
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium text-lg">Notification Types</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="teamUpdates" className="font-medium">
                      Team Updates
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications about team registrations and changes
                    </p>
                  </div>
                  <Switch
                    id="teamUpdates"
                    checked={notificationSettings.teamUpdates}
                    onCheckedChange={(checked) =>
                      handleNotificationSettingChange('teamUpdates', checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="gameStartAlerts" className="font-medium">
                      Game Start Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications when games are about to start
                    </p>
                  </div>
                  <Switch
                    id="gameStartAlerts"
                    checked={notificationSettings.gameStartAlerts}
                    onCheckedChange={(checked) =>
                      handleNotificationSettingChange('gameStartAlerts', checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="systemAlerts" className="font-medium">
                      System Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications about system updates and maintenance
                    </p>
                  </div>
                  <Switch
                    id="systemAlerts"
                    checked={notificationSettings.systemAlerts}
                    onCheckedChange={(checked) =>
                      handleNotificationSettingChange('systemAlerts', checked)
                    }
                  />
                </div>
              </div>

              <Button className="mt-6 w-full sm:w-auto" onClick={() => handleSaveSettings('Notification')}>
                <Save className="mr-2 h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Configure security options for the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactorAuth" className="font-medium">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Require 2FA for admin logins
                    </p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    checked={securitySettings.twoFactorAuth}
                    onCheckedChange={(checked) =>
                      handleSecuritySettingChange('twoFactorAuth', checked)
                    }
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                  <Input
                    id="passwordExpiry"
                    type="number"
                    min="0"
                    value={securitySettings.passwordExpiry}
                    onChange={(e) =>
                      handleSecuritySettingChange('passwordExpiry', parseInt(e.target.value) || 0)
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Number of days before passwords expire and need to be reset
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    min="5"
                    value={securitySettings.sessionTimeout}
                    onChange={(e) =>
                      handleSecuritySettingChange('sessionTimeout', parseInt(e.target.value) || 30)
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Inactive sessions will be logged out automatically
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enforceStrongPasswords" className="font-medium">
                      Enforce Strong Passwords
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Require passwords with numbers, symbols and mixed case
                    </p>
                  </div>
                  <Switch
                    id="enforceStrongPasswords"
                    checked={securitySettings.enforceStrongPasswords}
                    onCheckedChange={(checked) =>
                      handleSecuritySettingChange('enforceStrongPasswords', checked)
                    }
                  />
                </div>
              </div>

              <Button className="mt-6 w-full sm:w-auto" onClick={() => handleSaveSettings('Security')}>
                <Save className="mr-2 h-4 w-4" />
                Save Security Settings
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Database Operations</CardTitle>
              <CardDescription>
                Advanced database operations for administrators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 border-dashed flex flex-col items-center justify-center space-y-2">
                  <Database className="h-8 w-8 mb-2" />
                  <span>Export Database</span>
                  <span className="text-xs text-muted-foreground">
                    Download a backup of all competition data
                  </span>
                </Button>
                <Button variant="outline" className="h-auto p-4 border-dashed flex flex-col items-center justify-center space-y-2">
                  <Database className="h-8 w-8 mb-2" />
                  <span>Import Data</span>
                  <span className="text-xs text-muted-foreground">
                    Restore data from a backup file
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
