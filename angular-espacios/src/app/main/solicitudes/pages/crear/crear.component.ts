import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { PersonaService } from '../../../../services/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Solicitud } from '../../../../interfaces/solicitud';
import { SolicitudesService } from '../../../../services/solicitudes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  modoEditar: boolean = false;
  id: any;

  cargos: string[] = [];

  persona: any;

  formHorario: FormGroup = this.fb.group({
    nombre: [{ value: '', disabled: true }],
    cargo: [, [Validators.required]],
    unidad: [{ value: '', disabled: true }],
    telefono: [{ value: '', disabled: true }],
    email: [, [Validators.required, Validators.email]],
    tipo: [,],
    nombreActividad: [, [Validators.required, Validators.minLength(5)]],
    start: [,],
    end: [,],
    dia: [,],
    horaInicio: [,],
    horaFin: [,],
  });

  diasSemana: string[] = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];

  horas = Array.from(Array(24).keys());

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private solicitudesService: SolicitudesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.modoEditar = false;
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.solicitudesService.findOne(this.id).subscribe((res) => {
        this.modoEditar = true;
        this.formHorario.patchValue({ ...res });
      });
    }
  }

  isNotValidField(field: string) {
    return (
      this.formHorario.controls[field].errors &&
      this.formHorario.controls[field].touched
    );
  }

  isValidForm() {
    return this.formHorario.valid;
  }

  buscarPersona(email: any) {
    return lastValueFrom(this.personaService.findOne(email));
  }

  async actualizarCamposPersona() {
    const email = this.formHorario.controls['email'].value;

    this.persona = (await this.buscarPersona(email))[0];

    if (this.persona) {
      this.cargos = [...this.persona.cargo];

      this.formHorario.patchValue(this.persona);

      this.persona.cargo = this.formHorario.controls['cargo'].value;

      return;
    }

    this.clearPersonalData();
  }

  clearPersonalData() {
    this.formHorario.reset();

    this.snackBar.open('Persona no disponible', '', {
      duration: 1500,
    });
  }

  save() {
    let solicitud = this.formHorario.getRawValue();

    if (this.modoEditar) {
      (solicitud.id = this.id),
        this.solicitudesService.update(solicitud).subscribe(() => {
          this.snackBar.open('Solicitud actualizada', '', {
            duration: 1500,
          });

          this.router.navigate(['/solicitudes/consultar']);
        });
    } else {
      this.solicitudesService.save(solicitud).subscribe((res) => {
        this.snackBar.open('Solicitud guardada', '', {
          duration: 1500,
        });

        this.router.navigate(['/solicitudes/consultar']);
      });
    }
  }
}
